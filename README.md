# JSerde (@voidmerge/jserde)

![NPM License](https://img.shields.io/npm/l/%40voidmerge%2Fjserde)
![NPM Version](https://img.shields.io/npm/v/%40voidmerge%2Fjserde)

Streaming data format translation and transcoding.

```ts
import { jserde, json, leaf } from '@voidmerge/jserde';

console.log(
  jserde()
    .fromStr('{"hello":"world"}', new json.DeserializerJson())
    .toStr(new leaf.SerializerLeaf()),
);

// hello = world
```

## Namespaces

- [json](Namespace.json.md)
- [stream](Namespace.stream.md)
- [types](Namespace.types.md)

## Interfaces

### JSerde

Javascript Serialization and Deserialization utility.

#### Methods

##### fromJs()

> **fromJs**(`read`: [`JsVal`](Namespace.types.md#jsval)): [`JSerde`](#jserde)

Load in-memory javascript types for serialization.

###### Parameters

| Parameter | Type                                |
| --------- | ----------------------------------- |
| `read`    | [`JsVal`](Namespace.types.md#jsval) |

###### Returns

[`JSerde`](#jserde)

##### fromReadStr()

> **fromReadStr**(`read`: `ReadableStream`\<`string`>\>, `deserializer`: [`Deserializer`](Namespace.types.md#deserializer)): [`JSerde`](#jserde)

Deserialize from a streaming string source.

###### Parameters

| Parameter      | Type                                              |
| -------------- | ------------------------------------------------- |
| `read`         | `ReadableStream`\<`string`\>                      |
| `deserializer` | [`Deserializer`](Namespace.types.md#deserializer) |

###### Returns

[`JSerde`](#jserde)

##### fromReadUtf8()

> **fromReadUtf8**(`read`: `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`>>\>\>, `deserializer`: [`Deserializer`](Namespace.types.md#deserializer)): [`JSerde`](#jserde)

Deserialize from a streaming utf-8 byte source.

###### Parameters

| Parameter      | Type                                                  |
| -------------- | ----------------------------------------------------- |
| `read`         | `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\> |
| `deserializer` | [`Deserializer`](Namespace.types.md#deserializer)     |

###### Returns

[`JSerde`](#jserde)

##### fromStr()

> **fromStr**(`read`: `string`, `deserializer`: [`Deserializer`](Namespace.types.md#deserializer)): [`JSerde`](#jserde)

Deserialize from a complete in-memory string.

###### Parameters

| Parameter      | Type                                              |
| -------------- | ------------------------------------------------- |
| `read`         | `string`                                          |
| `deserializer` | [`Deserializer`](Namespace.types.md#deserializer) |

###### Returns

[`JSerde`](#jserde)

##### fromUtf8()

> **fromUtf8**(`read`: `Uint8Array`, `deserializer`: [`Deserializer`](Namespace.types.md#deserializer)): [`JSerde`](#jserde)

Deserialize from a complete in-memory utf-8 buffer.

###### Parameters

| Parameter      | Type                                              |
| -------------- | ------------------------------------------------- |
| `read`         | `Uint8Array`                                      |
| `deserializer` | [`Deserializer`](Namespace.types.md#deserializer) |

###### Returns

[`JSerde`](#jserde)

##### toJs()

> **toJs**(): `Promise`\<[`JsVal`](Namespace.types.md#jsval)>\>

Serialize / load data into in-memory javascript types.

###### Returns

`Promise`\<[`JsVal`](Namespace.types.md#jsval)\>

##### toReadStr()

> **toReadStr**(`serializer`: [`Serializer`](Namespace.types.md#serializer)): `ReadableStream`\<`string`>\>

Serialize into a streaming string source.

###### Parameters

| Parameter    | Type                                          |
| ------------ | --------------------------------------------- |
| `serializer` | [`Serializer`](Namespace.types.md#serializer) |

###### Returns

`ReadableStream`\<`string`\>

##### toReadUtf8()

> **toReadUtf8**(`serializer`: [`Serializer`](Namespace.types.md#serializer)): `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`>>\>\>

Serialize into a streaming utf-8 byte source.

###### Parameters

| Parameter    | Type                                          |
| ------------ | --------------------------------------------- |
| `serializer` | [`Serializer`](Namespace.types.md#serializer) |

###### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

##### toStr()

> **toStr**(`serializer`: [`Serializer`](Namespace.types.md#serializer)): `Promise`\<`string`>\>

Serialize into a complete in-memory string.

###### Parameters

| Parameter    | Type                                          |
| ------------ | --------------------------------------------- |
| `serializer` | [`Serializer`](Namespace.types.md#serializer) |

###### Returns

`Promise`\<`string`\>

##### toUtf8()

> **toUtf8**(`serializer`: [`Serializer`](Namespace.types.md#serializer)): `Promise`\<`Uint8Array`\<`ArrayBufferLike`>>\>\>

Serialize into a complete in-memory utf-8 buffer.

###### Parameters

| Parameter    | Type                                          |
| ------------ | --------------------------------------------- |
| `serializer` | [`Serializer`](Namespace.types.md#serializer) |

###### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

## Functions

### jserde()

> **jserde**(): [`JSerde`](#jserde)

The main entrypoint into Javascript serialization and deserialization.

Call this function, then a `from*()` api to load data, then a `to*()` api
to transform the data into the desired target.

#### Returns

[`JSerde`](#jserde)
