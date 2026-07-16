export * from './types.js';
export * from './json.js';

import { JsVal, TokTy, Tok } from './types.js';

export function jsToStream(val: JsVal): ReadableStream<Tok> {
  const it = jsIterate(val);
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = it.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

function* jsIterate(val: JsVal): Generator<Tok> {
  if (Array.isArray(val)) {
    yield { t: TokTy.ArrOpen };

    for (const item of val) {
      yield* jsIterate(item);
    }

    yield { t: TokTy.ArrClose };
  } else if (val === null) {
    yield { t: TokTy.Null };
  } else {
    switch (typeof val) {
      case 'number':
        yield { t: TokTy.F64, v: val };
        break;
    }
  }
}

export async function streamToJs(stream: ReadableStream<Tok>): Promise<JsVal> {
  const all: Tok[] = [];
  for await (const tok of stream) {
    all.push(tok);
  }
  return tokToVal(all);
}

export async function streamToString(
  stream: ReadableStream<string>,
): Promise<string> {
  const all: string[] = [];
  for await (const str of stream) {
    all.push(str);
  }
  return all.join('');
}

function tokToVal(all: Tok[]): JsVal {
  const tok = all.shift();
  if (!tok) {
    throw new Error('unexpected eof');
  }
  switch (tok.t) {
    case TokTy.Null:
      return null;
    case TokTy.F64:
      return tok.v;
    case TokTy.ArrOpen:
      const out = [];
      while (true) {
        if (all[0].t === TokTy.ArrClose) {
          break;
        }
        out.push(tokToVal(all));
      }
      return out;
  }

  throw new Error('unreachable');
}
