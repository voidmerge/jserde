## Enumerations

### TokTy

#### Enumeration Members

##### ArrClose

> **ArrClose**: `"]"`

##### ArrOpen

> **ArrOpen**: `"["`

##### Bool

> **Bool**: `"bool"`

##### F64

> **F64**: `"f64"`

##### Null

> **Null**: `"null"`

##### ObjClose

> **ObjClose**: `"}"`

##### ObjOpen

> **ObjOpen**: `"{"`

##### Str

> **Str**: `"str"`

## Classes

### DeserializerStrUtil

Utility class that implements string Deserialization.

Also allows deserialization from binary streams, treating them as utf-8.

To implement a Deserializer using this class, you must implement process().

#### Extended by

- [`DeserializerJson`](Namespace.json.md#deserializerjson)

#### Implements

- [`DeserializerStr`](#deserializerstr)
- [`DeserializerBin`](#deserializerbin)

#### Constructors

##### Constructor

> **new DeserializerStrUtil**(): [`DeserializerStrUtil`](#deserializerstrutil)

###### Returns

[`DeserializerStrUtil`](#deserializerstrutil)

#### Accessors

##### buffer

###### Get Signature

> **get** **buffer**(): `string`

###### Returns

`string`

##### cursor

###### Get Signature

> **get** **cursor**(): `number`

###### Returns

`number`

#### Methods

##### advance()

> **advance**(`length`: `number`): `void`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `length`  | `number` |

###### Returns

`void`

##### append()

> **append**(`chunk`: `string`): `void`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `chunk`   | `string` |

###### Returns

`void`

##### match()

> **match**(`re`: `RegExp`): `string` \| `null`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `re`      | `RegExp` |

###### Returns

`string` \| `null`

##### process()

> **process**(`final`: `boolean`): [`Tok`](#tok)[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

[`Tok`](#tok)[]

##### transformStreamBin()

> **transformStreamBin**(): `TransformStream`\<`Uint8Array`\<`ArrayBufferLike`>\>, [`Tok`](#tok)>\>

###### Returns

`TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`Tok`](#tok)\>

###### Implementation of

[`DeserializerBin`](#deserializerbin).[`transformStreamBin`](#transformstreambin-2)

##### transformStreamStr()

> **transformStreamStr**(): `TransformStream`\<`string`, [`Tok`](#tok)>\>

###### Returns

`TransformStream`\<`string`, [`Tok`](#tok)\>

###### Implementation of

[`DeserializerStr`](#deserializerstr).[`transformStreamStr`](#transformstreamstr-2)

---

### SerializerStrUtil

Utility class that implements string Serialization.

Also allows Serialization to binary streams, treating them as utf-8.

To implement a Serializer using this class, you must implement process().

#### Extended by

- [`SerializerJson`](Namespace.json.md#serializerjson)

#### Implements

- [`SerializerStr`](#serializerstr)
- [`SerializerBin`](#serializerbin)

#### Constructors

##### Constructor

> **new SerializerStrUtil**(): [`SerializerStrUtil`](#serializerstrutil)

###### Returns

[`SerializerStrUtil`](#serializerstrutil)

#### Accessors

##### tokens

###### Get Signature

> **get** **tokens**(): [`Tok`](#tok)[]

###### Returns

[`Tok`](#tok)[]

#### Methods

##### append()

> **append**(`token`: [`Tok`](#tok)): `void`

###### Parameters

| Parameter | Type          |
| --------- | ------------- |
| `token`   | [`Tok`](#tok) |

###### Returns

`void`

##### process()

> **process**(`final`: `boolean`): `string`[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

`string`[]

##### shift()

> **shift**(): [`Tok`](#tok) \| `undefined`

###### Returns

[`Tok`](#tok) \| `undefined`

##### transformStreamBin()

> **transformStreamBin**(): `TransformStream`\<[`Tok`](#tok), `Uint8Array`\<`ArrayBufferLike`>>\>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `Uint8Array`\<`ArrayBufferLike`\>\>

###### Implementation of

[`SerializerBin`](#serializerbin).[`transformStreamBin`](#transformstreambin-3)

##### transformStreamStr()

> **transformStreamStr**(): `TransformStream`\<[`Tok`](#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `string`\>

###### Implementation of

[`SerializerStr`](#serializerstr).[`transformStreamStr`](#transformstreamstr-3)

## Interfaces

### DeserializerBin

#### Methods

##### transformStreamBin()

> **transformStreamBin**(): `TransformStream`\<`Uint8Array`\<`ArrayBufferLike`>\>, [`Tok`](#tok)>\>

###### Returns

`TransformStream`\<`Uint8Array`\<`ArrayBufferLike`\>, [`Tok`](#tok)\>

---

### DeserializerStr

#### Methods

##### transformStreamStr()

> **transformStreamStr**(): `TransformStream`\<`string`, [`Tok`](#tok)>\>

###### Returns

`TransformStream`\<`string`, [`Tok`](#tok)\>

---

### SerializerBin

#### Methods

##### transformStreamBin()

> **transformStreamBin**(): `TransformStream`\<[`Tok`](#tok), `Uint8Array`\<`ArrayBufferLike`>>\>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `Uint8Array`\<`ArrayBufferLike`\>\>

---

### SerializerStr

#### Methods

##### transformStreamStr()

> **transformStreamStr**(): `TransformStream`\<[`Tok`](#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `string`\>

---

### TokArrClose

#### Properties

| Property                    | Type                    |
| --------------------------- | ----------------------- |
| <a id="property-t"></a> `t` | [`ArrClose`](#arrclose) |

---

### TokArrOpen

#### Properties

| Property                      | Type                  |
| ----------------------------- | --------------------- |
| <a id="property-t-1"></a> `t` | [`ArrOpen`](#arropen) |

---

### TokBool

#### Properties

| Property                      | Type            |
| ----------------------------- | --------------- |
| <a id="property-t-2"></a> `t` | [`Bool`](#bool) |
| <a id="property-v"></a> `v`   | `boolean`       |

---

### TokF64

#### Properties

| Property                      | Type          |
| ----------------------------- | ------------- |
| <a id="property-t-3"></a> `t` | [`F64`](#f64) |
| <a id="property-v-1"></a> `v` | `number`      |

---

### TokNull

#### Properties

| Property                      | Type            |
| ----------------------------- | --------------- |
| <a id="property-t-4"></a> `t` | [`Null`](#null) |

---

### TokObjClose

#### Properties

| Property                      | Type                    |
| ----------------------------- | ----------------------- |
| <a id="property-t-5"></a> `t` | [`ObjClose`](#objclose) |

---

### TokObjOpen

#### Properties

| Property                      | Type                  |
| ----------------------------- | --------------------- |
| <a id="property-t-6"></a> `t` | [`ObjOpen`](#objopen) |

---

### TokStr

#### Properties

| Property                      | Type          |
| ----------------------------- | ------------- |
| <a id="property-t-7"></a> `t` | [`Str`](#str) |
| <a id="property-v-2"></a> `v` | `string`      |

## Type Aliases

### JsArr

> **JsArr** = [`JsVal`](#jsval)[]

---

### JsObj

> **JsObj** = `object`

#### Index Signature

\[`key`: `string`\]: [`JsVal`](#jsval)

---

### JsVal

> **JsVal** = `null` \| `boolean` \| `number` \| `string` \| [`JsArr`](#jsarr) \| [`JsObj`](#jsobj)

---

### Tok

> **Tok** = [`TokNull`](#toknull) \| [`TokBool`](#tokbool) \| [`TokF64`](#tokf64) \| [`TokStr`](#tokstr) \| [`TokArrOpen`](#tokarropen) \| [`TokArrClose`](#tokarrclose) \| [`TokObjOpen`](#tokobjopen) \| [`TokObjClose`](#tokobjclose)

## Functions

### transformChain()

> **transformChain**\<`Input`, `Shared`, `Output`>\>(`t1`: `TransformStream`\<`Input`, `Shared`>\>, `t2`: `TransformStream`\<`Shared`, `Output`>\>): `TransformStream`\<`Input`, `Output`>\>

#### Type Parameters

| Type Parameter |
| -------------- |
| `Input`        |
| `Shared`       |
| `Output`       |

#### Parameters

| Parameter | Type                                    |
| --------- | --------------------------------------- |
| `t1`      | `TransformStream`\<`Input`, `Shared`\>  |
| `t2`      | `TransformStream`\<`Shared`, `Output`\> |

#### Returns

`TransformStream`\<`Input`, `Output`\>
