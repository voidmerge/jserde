export type JsVal = null | boolean | number | string | JsArr;
export type JsArr = JsVal[];

export enum TokTy {
  Null = 'null',
  Bool = 'bool',
  F64 = 'f64',
  Str = 'str',
  ArrOpen = '[',
  ArrClose = ']',
}

export type Tok =
  TokNull | TokBool | TokF64 | TokStr | TokArrOpen | TokArrClose;

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

export class Serializer {
  append(token: Tok) {
    throw new Error('"append" unimplemented in base class');
  }

  process(final: boolean): string[] {
    throw new Error('"process" unimplemented in base class');
  }

  transformStream(): TransformStream<Tok, string> {
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
}

export class SerializerUtil extends Serializer {
  #tok: Tok[] = [];

  append(token: Tok) {
    this.#tok.push(token);
  }

  get tokens(): Tok[] {
    return this.#tok;
  }

  shift(): Tok | undefined {
    return this.#tok.shift();
  }
}

export class Deserializer {
  append(chunk: string) {
    throw new Error('"append" unimplemented in base class');
  }

  process(final: boolean): Tok[] {
    throw new Error('"process" unimplemented in base class');
  }

  transformStream(): TransformStream<string, Tok> {
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
}

export class DeserializerUtil extends Deserializer {
  #buf = '';
  #cur = 0;

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
}
