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

##### fromBin()

> **fromBin**(`read`: `Uint8Array`, `deserializer`: [`DeserializerBin`](Namespace.types.md#deserializerbin)): [`JSerde`](#jserde)

Deserialize from a complete in-memory utf-8 buffer.

###### Parameters

| Parameter      | Type                                                    |
| -------------- | ------------------------------------------------------- |
| `read`         | `Uint8Array`                                            |
| `deserializer` | [`DeserializerBin`](Namespace.types.md#deserializerbin) |

###### Returns

[`JSerde`](#jserde)

##### fromJs()

> **fromJs**(`read`: [`JsVal`](Namespace.types.md#jsval)): [`JSerde`](#jserde)

Load in-memory javascript types for serialization.

###### Parameters

| Parameter | Type                                |
| --------- | ----------------------------------- |
| `read`    | [`JsVal`](Namespace.types.md#jsval) |

###### Returns

[`JSerde`](#jserde)

##### fromReadBin()

> **fromReadBin**(`read`: `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`>>\>\>, `deserializer`: [`DeserializerBin`](Namespace.types.md#deserializerbin)): [`JSerde`](#jserde)

Deserialize from a streaming utf-8 byte source.

###### Parameters

| Parameter      | Type                                                    |
| -------------- | ------------------------------------------------------- |
| `read`         | `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>   |
| `deserializer` | [`DeserializerBin`](Namespace.types.md#deserializerbin) |

###### Returns

[`JSerde`](#jserde)

##### fromReadStr()

> **fromReadStr**(`read`: `ReadableStream`\<`string`>\>, `deserializer`: [`DeserializerStr`](Namespace.types.md#deserializerstr)): [`JSerde`](#jserde)

Deserialize from a streaming string source.

###### Parameters

| Parameter      | Type                                                    |
| -------------- | ------------------------------------------------------- |
| `read`         | `ReadableStream`\<`string`\>                            |
| `deserializer` | [`DeserializerStr`](Namespace.types.md#deserializerstr) |

###### Returns

[`JSerde`](#jserde)

##### fromStr()

> **fromStr**(`read`: `string`, `deserializer`: [`DeserializerStr`](Namespace.types.md#deserializerstr)): [`JSerde`](#jserde)

Deserialize from a complete in-memory string.

###### Parameters

| Parameter      | Type                                                    |
| -------------- | ------------------------------------------------------- |
| `read`         | `string`                                                |
| `deserializer` | [`DeserializerStr`](Namespace.types.md#deserializerstr) |

###### Returns

[`JSerde`](#jserde)

##### toBin()

> **toBin**(`serializer`: [`SerializerBin`](Namespace.types.md#serializerbin)): `Promise`\<`Uint8Array`\<`ArrayBufferLike`>>\>\>

Serialize into a complete in-memory utf-8 buffer.

###### Parameters

| Parameter    | Type                                                |
| ------------ | --------------------------------------------------- |
| `serializer` | [`SerializerBin`](Namespace.types.md#serializerbin) |

###### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

##### toJs()

> **toJs**(): `Promise`\<[`JsVal`](Namespace.types.md#jsval)>\>

Serialize / load data into in-memory javascript types.

###### Returns

`Promise`\<[`JsVal`](Namespace.types.md#jsval)\>

##### toReadBin()

> **toReadBin**(`serializer`: [`SerializerBin`](Namespace.types.md#serializerbin)): `ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`>>\>\>

Serialize into a streaming utf-8 byte source.

###### Parameters

| Parameter    | Type                                                |
| ------------ | --------------------------------------------------- |
| `serializer` | [`SerializerBin`](Namespace.types.md#serializerbin) |

###### Returns

`ReadableStream`\<`Uint8Array`\<`ArrayBufferLike`\>\>

##### toReadStr()

> **toReadStr**(`serializer`: [`SerializerStr`](Namespace.types.md#serializerstr)): `ReadableStream`\<`string`>\>

Serialize into a streaming string source.

###### Parameters

| Parameter    | Type                                                |
| ------------ | --------------------------------------------------- |
| `serializer` | [`SerializerStr`](Namespace.types.md#serializerstr) |

###### Returns

`ReadableStream`\<`string`\>

##### toStr()

> **toStr**(`serializer`: [`SerializerStr`](Namespace.types.md#serializerstr)): `Promise`\<`string`>\>

Serialize into a complete in-memory string.

###### Parameters

| Parameter    | Type                                                |
| ------------ | --------------------------------------------------- |
| `serializer` | [`SerializerStr`](Namespace.types.md#serializerstr) |

###### Returns

`Promise`\<`string`\>

## Functions

### jserde()

> **jserde**(): [`JSerde`](#jserde)

The main entrypoint into Javascript serialization and deserialization.

Call this function, then a `from*()` api to load data, then a `to*()` api
to transform the data into the desired target.

#### Returns

[`JSerde`](#jserde)
