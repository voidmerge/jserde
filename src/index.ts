/**
 * @packageDocumentation
 *
 * # JSerde (@voidmerge/jserde)
 *
 * ![NPM License](https://img.shields.io/npm/l/%40voidmerge%2Fjserde)
 * ![NPM Version](https://img.shields.io/npm/v/%40voidmerge%2Fjserde)
 *
 * Streaming data format translation and transcoding.
 *
 * ```ts
 * import { jserde, json, leaf } from '@voidmerge/jserde';
 *
 * console.log(
 *   jserde()
 *     .fromStr('{"hello":"world"}', new json.DeserializerJson())
 *     .toStr(new leaf.SerializerLeaf())
 * );
 *
 * // hello = world
 * ```
 */

export * as types from './types.js';
export * as stream from './stream.js';
export * as json from './json.js';

import * as types from './types.js';
import * as stream from './stream.js';
import * as json from './json.js';

/**
 * The main entrypoint into Javascript serialization and deserialization.
 *
 * Call this function, then a `from*()` api to load data, then a `to*()` api
 * to transform the data into the desired target.
 */
export function jserde(): JSerde {
  let _read: null | ReadableStream<types.Tok> = null;

  const getRead = () => {
    if (!_read) {
      throw new Error('Reader not initialized, first call a from* function.');
    }
    const out = _read;
    _read = null;
    return out;
  };

  const self: JSerde = {
    fromJs(read: types.JsVal): JSerde {
      _read = stream.jsToStream(read);

      return self;
    },

    fromStr(read: string, deserializer: types.DeserializerStr): JSerde {
      let done = false;

      _read = new ReadableStream({
        async pull(controller) {
          if (done) {
            controller.close();
          } else {
            controller.enqueue(read);
            done = true;
          }
        },
      }).pipeThrough(deserializer.transformStreamStr());

      return self;
    },

    fromBin(read: Uint8Array, deserializer: types.DeserializerBin): JSerde {
      let done = false;

      return self.fromReadBin(
        new ReadableStream({
          async pull(controller) {
            if (done) {
              controller.close();
            } else {
              controller.enqueue(read);
              done = true;
            }
          },
        }),
        deserializer,
      );
    },

    fromReadStr(
      read: ReadableStream<string>,
      deserializer: types.DeserializerStr,
    ): JSerde {
      _read = read.pipeThrough(deserializer.transformStreamStr());

      return self;
    },

    fromReadBin(
      read: ReadableStream<Uint8Array>,
      deserializer: types.DeserializerBin,
    ): JSerde {
      _read = read.pipeThrough(deserializer.transformStreamBin());

      return self;
    },

    async toJs(): Promise<types.JsVal> {
      return await stream.streamToJs(getRead());
    },

    async toStr(serializer: types.SerializerStr): Promise<string> {
      return await stream.streamToString(self.toReadStr(serializer));
    },

    async toBin(serializer: types.SerializerBin): Promise<Uint8Array> {
      return new Uint8Array(
        await new Response(self.toReadBin(serializer)).arrayBuffer(),
      );
    },

    toReadStr(serializer: types.SerializerStr): ReadableStream<string> {
      return getRead().pipeThrough(serializer.transformStreamStr());
    },

    toReadBin(serializer: types.SerializerBin): ReadableStream<Uint8Array> {
      return getRead().pipeThrough(serializer.transformStreamBin());
    },
  };

  return self;
}

/**
 * Javascript Serialization and Deserialization utility.
 */
export interface JSerde {
  /**
   * Load in-memory javascript types for serialization.
   */
  fromJs(read: types.JsVal): JSerde;

  /**
   * Deserialize from a complete in-memory string.
   */
  fromStr(read: string, deserializer: types.DeserializerStr): JSerde;

  /**
   * Deserialize from a complete in-memory utf-8 buffer.
   */
  fromBin(read: Uint8Array, deserializer: types.DeserializerBin): JSerde;

  /**
   * Deserialize from a streaming string source.
   */
  fromReadStr(
    read: ReadableStream<string>,
    deserializer: types.DeserializerStr,
  ): JSerde;

  /**
   * Deserialize from a streaming utf-8 byte source.
   */
  fromReadBin(
    read: ReadableStream<Uint8Array>,
    deserializer: types.DeserializerBin,
  ): JSerde;

  /**
   * Serialize / load data into in-memory javascript types.
   */
  toJs(): Promise<types.JsVal>;

  /**
   * Serialize into a complete in-memory string.
   */
  toStr(serializer: types.SerializerStr): Promise<string>;

  /**
   * Serialize into a complete in-memory utf-8 buffer.
   */
  toBin(serializer: types.SerializerBin): Promise<Uint8Array>;

  /**
   * Serialize into a streaming string source.
   */
  toReadStr(serializer: types.SerializerStr): ReadableStream<string>;

  /**
   * Serialize into a streaming utf-8 byte source.
   */
  toReadBin(serializer: types.SerializerBin): ReadableStream<Uint8Array>;
}
