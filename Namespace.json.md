## Classes

### DeserializerJson

Utility class that implements string Deserialization.

Also allows deserialization from binary streams, treating them as utf-8.

To implement a Deserializer using this class, you must implement process().

#### Extends

- [`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil)

#### Constructors

##### Constructor

> **new DeserializerJson**(): [`DeserializerJson`](#deserializerjson)

###### Returns

[`DeserializerJson`](#deserializerjson)

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`constructor`](Namespace.types.md#constructor)

#### Accessors

##### buffer

###### Get Signature

> **get** **buffer**(): `string`

###### Returns

`string`

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`buffer`](Namespace.types.md#buffer)

##### cursor

###### Get Signature

> **get** **cursor**(): `number`

###### Returns

`number`

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`cursor`](Namespace.types.md#cursor)

#### Methods

##### advance()

> **advance**(`length`: `number`): `void`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `length`  | `number` |

###### Returns

`void`

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`advance`](Namespace.types.md#advance)

##### append()

> **append**(`chunk`: `string`): `void`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `chunk`   | `string` |

###### Returns

`void`

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`append`](Namespace.types.md#append)

##### match()

> **match**(`re`: `RegExp`): `string` \| `null`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `re`      | `RegExp` |

###### Returns

`string` \| `null`

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`match`](Namespace.types.md#match)

##### process()

> **process**(`final`: `boolean`): [`Tok`](Namespace.types.md#tok)[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

[`Tok`](Namespace.types.md#tok)[]

###### Overrides

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`process`](Namespace.types.md#process)

##### transformStreamBin()

> **transformStreamBin**(): `TransformStream`\<`Uint8Array`\<`ArrayBufferLike`>\>, [`Tok`](Namespace.types.md#tok)>\>

###### Returns

`TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`Tok`](Namespace.types.md#tok)\>

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`transformStreamBin`](Namespace.types.md#transformstreambin)

##### transformStreamStr()

> **transformStreamStr**(): `TransformStream`\<`string`, [`Tok`](Namespace.types.md#tok)>\>

###### Returns

`TransformStream`\<`string`, [`Tok`](Namespace.types.md#tok)\>

###### Inherited from

[`DeserializerStrUtil`](Namespace.types.md#deserializerstrutil).[`transformStreamStr`](Namespace.types.md#transformstreamstr)

---

### SerializerJson

Utility class that implements string Serialization.

Also allows Serialization to binary streams, treating them as utf-8.

To implement a Serializer using this class, you must implement process().

#### Extends

- [`SerializerStrUtil`](Namespace.types.md#serializerstrutil)

#### Constructors

##### Constructor

> **new SerializerJson**(): [`SerializerJson`](#serializerjson)

###### Returns

[`SerializerJson`](#serializerjson)

###### Inherited from

[`SerializerStrUtil`](Namespace.types.md#serializerstrutil).[`constructor`](Namespace.types.md#constructor-1)

#### Accessors

##### tokens

###### Get Signature

> **get** **tokens**(): [`Tok`](Namespace.types.md#tok)[]

###### Returns

[`Tok`](Namespace.types.md#tok)[]

###### Inherited from

[`SerializerStrUtil`](Namespace.types.md#serializerstrutil).[`tokens`](Namespace.types.md#tokens)

#### Methods

##### append()

> **append**(`token`: [`Tok`](Namespace.types.md#tok)): `void`

###### Parameters

| Parameter | Type                            |
| --------- | ------------------------------- |
| `token`   | [`Tok`](Namespace.types.md#tok) |

###### Returns

`void`

###### Inherited from

[`SerializerStrUtil`](Namespace.types.md#serializerstrutil).[`append`](Namespace.types.md#append-1)

##### process()

> **process**(`final`: `boolean`): `string`[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

`string`[]

###### Overrides

[`SerializerStrUtil`](Namespace.types.md#serializerstrutil).[`process`](Namespace.types.md#process-1)

##### shift()

> **shift**(): [`Tok`](Namespace.types.md#tok) \| `undefined`

###### Returns

[`Tok`](Namespace.types.md#tok) \| `undefined`

###### Inherited from

[`SerializerStrUtil`](Namespace.types.md#serializerstrutil).[`shift`](Namespace.types.md#shift)

##### transformStreamBin()

> **transformStreamBin**(): `TransformStream`\<[`Tok`](Namespace.types.md#tok), `Uint8Array`\<`ArrayBufferLike`>>\>\>

###### Returns

`TransformStream`\<[`Tok`](Namespace.types.md#tok), `Uint8Array`\<`ArrayBufferLike`\>\>

###### Inherited from

[`SerializerStrUtil`](Namespace.types.md#serializerstrutil).[`transformStreamBin`](Namespace.types.md#transformstreambin-1)

##### transformStreamStr()

> **transformStreamStr**(): `TransformStream`\<[`Tok`](Namespace.types.md#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](Namespace.types.md#tok), `string`\>

###### Inherited from

[`SerializerStrUtil`](Namespace.types.md#serializerstrutil).[`transformStreamStr`](Namespace.types.md#transformstreamstr-1)
