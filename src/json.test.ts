import { json, jserde } from './index.js';

describe('json', () => {
  it('ser', async () => {
    const FIX: [any, string][] = [
      [[], '[]'],
      [null, 'null'],
      [true, 'true'],
      [false, 'false'],
      ['test', '"test"'],
      [['hello', 'world'], '["hello","world"]'],
      [{ hello: 'world' }, '{"hello":"world"}'],
      [{ hello: 'world', foo: 'bar' }, '{"hello":"world","foo":"bar"}'],
    ];

    for (const [val, exp] of FIX) {
      expect(
        await jserde().fromJs(val).toStr(new json.SerializerJson()),
      ).to.equal(exp);
    }
  });

  it('de', async () => {
    const FIX: [string, any][] = [
      //['{}', {}],
      ['[]', []],
      ['null', null],
      ['true', true],
      ['false', false],
      ['"test"', 'test'],
      ['["hello","world"]', ['hello', 'world']],
      ['{"hello":"world"}', { hello: 'world' }],
      ['{"hello":"world","foo":"bar"}', { hello: 'world', foo: 'bar' }],
    ];

    for (const [str, exp] of FIX) {
      expect(
        await jserde().fromStr(str, new json.DeserializerJson()).toJs(),
      ).to.deep.equal(exp);
    }
  });
});
