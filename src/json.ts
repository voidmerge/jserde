import { SerializerUtil, DeserializerUtil, TokTy, Tok } from './types.js';

export class SerializerJson extends SerializerUtil {
  #state: ('arr1' | 'arrN')[] = [];

  process(final: boolean): string[] {
    const out = [];

    for (let tok = this.shift(); tok; tok = this.shift()) {
      switch (tok.t) {
        case TokTy.ArrClose:
          out.push(']');
          if (this.#state[0] === 'arrN') {
            this.#state.shift();
          }
          if (this.#state[0] === 'arr1') {
            this.#state.shift();
          }
          continue;
      }

      if (this.#state[0] === 'arr1') {
        this.#state.unshift('arrN');
      } else if (this.#state[0] === 'arrN') {
        out.push(',');
      }

      switch (tok.t) {
        case TokTy.Null:
          out.push('null');
          continue;
        case TokTy.F64:
          out.push(JSON.stringify(tok.v));
          continue;
        case TokTy.ArrOpen:
          out.push('[');
          this.#state.unshift('arr1');
          continue;
      }
    }

    return out;
  }
}

const RE: [string, RegExp][] = [
  ['ws', /[:, \r\n\t]/uy],
  [TokTy.Null, /null(?=[^a-zA-Z0-9_$])/uy],
  [TokTy.F64, /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?(?=[^\d.eE+-])/uy],
  [TokTy.ArrOpen, /\[/uy],
  [TokTy.ArrClose, /\]/uy],
];

const RE_FIN: [string, RegExp][] = [
  ['ws', /[:, \r\n\t]/uy],
  [TokTy.Null, /null(?![a-zA-Z0-9_$])/uy],
  [TokTy.F64, /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/uy],
  [TokTy.ArrOpen, /\[/uy],
  [TokTy.ArrClose, /\]/uy],
];

export class DeserializerJson extends DeserializerUtil {
  process(final: boolean): Tok[] {
    const out: Tok[] = [];
    const reList = final ? RE_FIN : RE;
    while (true) {
      let didMatch = false;

      for (const [t, re] of reList) {
        const match = this.match(re);
        if (typeof match === 'string') {
          didMatch = true;
          switch (t) {
            case 'ws':
              break;
            case TokTy.Null:
              out.push({ t });
              break;
            case TokTy.F64:
              out.push({ t, v: JSON.parse(match) });
              break;
            case TokTy.ArrOpen:
              out.push({ t });
              break;
            case TokTy.ArrClose:
              out.push({ t });
              break;
          }
        }
      }

      // no match
      if (!didMatch) {
        return out;
      }
    }
  }
}
