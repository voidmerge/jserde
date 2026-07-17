import * as types from './types.js';

export function jsToStream(val: types.JsVal): ReadableStream<types.Tok> {
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

function* jsIterate(val: types.JsVal): Generator<types.Tok> {
  if (Array.isArray(val)) {
    yield { t: types.TokTy.ArrOpen };

    for (const item of val) {
      yield* jsIterate(item);
    }

    yield { t: types.TokTy.ArrClose };
  } else if (val === null) {
    yield { t: types.TokTy.Null };
  } else {
    switch (typeof val) {
      case 'number':
        yield { t: types.TokTy.F64, v: val };
        break;
    }
  }
}

export async function streamToJs(
  stream: ReadableStream<types.Tok>,
): Promise<types.JsVal> {
  const all: types.Tok[] = [];
  for await (const tok of stream) {
    all.push(tok);
  }
  return tokToVal(all);
}

function tokToVal(all: types.Tok[]): types.JsVal {
  const tok = all.shift();
  if (!tok) {
    throw new Error('unexpected eof');
  }
  switch (tok.t) {
    case types.TokTy.Null:
      return null;
    case types.TokTy.F64:
      return tok.v;
    case types.TokTy.ArrOpen:
      const out = [];
      while (true) {
        if (all[0].t === types.TokTy.ArrClose) {
          break;
        }
        out.push(tokToVal(all));
      }
      return out;
  }

  throw new Error('unreachable');
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
