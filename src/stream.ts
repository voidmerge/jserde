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
      case 'object':
        yield { t: types.TokTy.ObjOpen };

        for (const key in val) {
          yield* jsIterate(key);
          yield* jsIterate(val[key]);
        }

        yield { t: types.TokTy.ObjClose };
        break;
      case 'boolean':
        yield { t: types.TokTy.Bool, v: val };
        break;
      case 'number':
        yield { t: types.TokTy.F64, v: val };
        break;
      case 'string':
        yield { t: types.TokTy.Str, v: val };
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
    case types.TokTy.Bool:
      return tok.v;
    case types.TokTy.F64:
      return tok.v;
    case types.TokTy.Str:
      return tok.v;
    case types.TokTy.ArrOpen:
      const arr: types.JsArr = [];
      while (true) {
        if (all[0].t === types.TokTy.ArrClose) {
          break;
        }
        arr.push(tokToVal(all));
      }
      return arr;
    case types.TokTy.ObjOpen:
      const obj: types.JsObj = {};
      while (true) {
        if (all[0].t === types.TokTy.ObjClose) {
          break;
        }
        const key = tokToVal(all);
        if (typeof key !== 'string') {
          throw new Error('invalid object key was not a string');
        }
        obj[key] = tokToVal(all);
      }
      return obj;
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
