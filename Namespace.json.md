## Classes

### DeserializerJson

#### Extends

- [`DeserializerUtil`](Namespace.types.md#deserializerutil)

#### Constructors

##### Constructor

> **new DeserializerJson**(): [`DeserializerJson`](#deserializerjson)

###### Returns

[`DeserializerJson`](#deserializerjson)

###### Inherited from

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`constructor`](Namespace.types.md#constructor-1)

#### Accessors

##### buffer

###### Get Signature

> **get** **buffer**(): `string`

###### Returns

`string`

###### Inherited from

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`buffer`](Namespace.types.md#buffer)

##### cursor

###### Get Signature

> **get** **cursor**(): `number`

###### Returns

`number`

###### Inherited from

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`cursor`](Namespace.types.md#cursor)

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

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`advance`](Namespace.types.md#advance)

##### append()

> **append**(`chunk`: `string`): `void`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `chunk`   | `string` |

###### Returns

`void`

###### Inherited from

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`append`](Namespace.types.md#append-1)

##### match()

> **match**(`re`: `RegExp`): `string` \| `null`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `re`      | `RegExp` |

###### Returns

`string` \| `null`

###### Inherited from

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`match`](Namespace.types.md#match)

##### process()

> **process**(`final`: `boolean`): [`Tok`](Namespace.types.md#tok)[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

[`Tok`](Namespace.types.md#tok)[]

###### Overrides

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`process`](Namespace.types.md#process-1)

##### transformStream()

> **transformStream**(): `TransformStream`\<`string`, [`Tok`](Namespace.types.md#tok)>\>

###### Returns

`TransformStream`\<`string`, [`Tok`](Namespace.types.md#tok)\>

###### Inherited from

[`DeserializerUtil`](Namespace.types.md#deserializerutil).[`transformStream`](Namespace.types.md#transformstream-1)

---

### SerializerJson

#### Extends

- [`SerializerUtil`](Namespace.types.md#serializerutil)

#### Constructors

##### Constructor

> **new SerializerJson**(): [`SerializerJson`](#serializerjson)

###### Returns

[`SerializerJson`](#serializerjson)

###### Inherited from

[`SerializerUtil`](Namespace.types.md#serializerutil).[`constructor`](Namespace.types.md#constructor-3)

#### Accessors

##### tokens

###### Get Signature

> **get** **tokens**(): [`Tok`](Namespace.types.md#tok)[]

###### Returns

[`Tok`](Namespace.types.md#tok)[]

###### Inherited from

[`SerializerUtil`](Namespace.types.md#serializerutil).[`tokens`](Namespace.types.md#tokens)

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

[`SerializerUtil`](Namespace.types.md#serializerutil).[`append`](Namespace.types.md#append-3)

##### process()

> **process**(`final`: `boolean`): `string`[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

`string`[]

###### Overrides

[`SerializerUtil`](Namespace.types.md#serializerutil).[`process`](Namespace.types.md#process-3)

##### shift()

> **shift**(): [`Tok`](Namespace.types.md#tok) \| `undefined`

###### Returns

[`Tok`](Namespace.types.md#tok) \| `undefined`

###### Inherited from

[`SerializerUtil`](Namespace.types.md#serializerutil).[`shift`](Namespace.types.md#shift)

##### transformStream()

> **transformStream**(): `TransformStream`\<[`Tok`](Namespace.types.md#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](Namespace.types.md#tok), `string`\>

###### Inherited from

[`SerializerUtil`](Namespace.types.md#serializerutil).[`transformStream`](Namespace.types.md#transformstream-3)
