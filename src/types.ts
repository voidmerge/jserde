export type JsVal = null | boolean | number | string | JsArr | JsObj;
export type JsArr = JsVal[];
export type JsObj = { [key: string]: JsVal };

export enum TokTy {
  Null = 'null',
  Bool = 'bool',
  F64 = 'f64',
  Str = 'str',
  ArrOpen = '[',
  ArrClose = ']',
  ObjOpen = '{',
  ObjClose = '}',
}

export type Tok =
  | TokNull
  | TokBool
  | TokF64
  | TokStr
  | TokArrOpen
  | TokArrClose
  | TokObjOpen
  | TokObjClose;

export interface TokNull {
  t: TokTy.Null;
}

export interface TokBool {
  t: TokTy.Bool;
  v: boolean;
}

export interface TokF64 {
  t: TokTy.F64;
  v: number;
}

export interface TokStr {
  t: TokTy.Str;
  v: string;
}

export interface TokArrOpen {
  t: TokTy.ArrOpen;
}

export interface TokArrClose {
  t: TokTy.ArrClose;
}

export interface TokObjOpen {
  t: TokTy.ObjOpen;
}

export interface TokObjClose {
  t: TokTy.ObjClose;
}

export function transformChain<Input, Shared, Output>(
  t1: TransformStream<Input, Shared>,
  t2: TransformStream<Shared, Output>,
): TransformStream<Input, Output> {
  return {
    readable: t1.readable.pipeThrough(t2),
    writable: t1.writable,
  };
}

export interface SerializerStr {
  transformStreamStr(): TransformStream<Tok, string>;
}

export interface SerializerBin {
  transformStreamBin(): TransformStream<Tok, Uint8Array>;
}

/**
 * Utility class that implements string Serialization.
 *
 * Also allows Serialization to binary streams, treating them as utf-8.
 *
 * To implement a Serializer using this class, you must implement process().
 */
export class SerializerStrUtil implements SerializerStr, SerializerBin {
  #tok: Tok[] = [];

  process(final: boolean): string[] {
    throw new Error('"process" unimplemented in base class');
  }

  append(token: Tok) {
    this.#tok.push(token);
  }

  get tokens(): Tok[] {
    return this.#tok;
  }

  shift(): Tok | undefined {
    return this.#tok.shift();
  }

  transformStreamStr(): TransformStream<Tok, string> {
    const self = this;
    return new TransformStream({
      transform(
        token: Tok,
        controller: TransformStreamDefaultController<string>,
      ) {
        self.append(token);
        for (const str of self.process(false)) {
          controller.enqueue(str);
        }
      },
      flush(controller: TransformStreamDefaultController<string>) {
        for (const str of self.process(true)) {
          controller.enqueue(str);
        }
      },
    });
  }

  transformStreamBin(): TransformStream<Tok, Uint8Array> {
    const tokToStr = this.transformStreamStr();
    const strToBin = new TextEncoderStream() as TransformStream<
      string,
      Uint8Array
    >;
    return transformChain(tokToStr, strToBin);
  }
}

export interface DeserializerStr {
  transformStreamStr(): TransformStream<string, Tok>;
}

export interface DeserializerBin {
  transformStreamBin(): TransformStream<Uint8Array, Tok>;
}

/**
 * Utility class that implements string Deserialization.
 *
 * Also allows deserialization from binary streams, treating them as utf-8.
 *
 * To implement a Deserializer using this class, you must implement process().
 */
export class DeserializerStrUtil implements DeserializerStr, DeserializerBin {
  #buf = '';
  #cur = 0;

  process(final: boolean): Tok[] {
    throw new Error('"process" unimplemented in base class');
  }

  append(chunk: string) {
    if (this.#cur > 32768) {
      this.#buf = this.#buf.slice(this.#cur);
      this.#cur = 0;
    }
    this.#buf += chunk;
  }

  get buffer(): string {
    return this.#buf;
  }

  get cursor(): number {
    return this.#cur;
  }

  advance(length: number) {
    this.#cur += length;
  }

  match(re: RegExp): string | null {
    re.lastIndex = this.#cur;
    const match = re.exec(this.#buf);
    if (match) {
      const out = match[0];
      this.#cur = re.lastIndex;
      return out;
    }
    return null;
  }

  transformStreamStr(): TransformStream<string, Tok> {
    const self = this;
    return new TransformStream({
      transform(
        chunk: string,
        controller: TransformStreamDefaultController<Tok>,
      ) {
        self.append(chunk);
        for (const tok of self.process(false)) {
          controller.enqueue(tok);
        }
      },
      flush(controller: TransformStreamDefaultController<Tok>) {
        for (const tok of self.process(true)) {
          controller.enqueue(tok);
        }
      },
    });
  }

  transformStreamBin(): TransformStream<Uint8Array, Tok> {
    const binToStr = new TextDecoderStream() as TransformStream<
      Uint8Array,
      string
    >;
    const strToTok = this.transformStreamStr();
    return transformChain(binToStr, strToTok);
  }
}
