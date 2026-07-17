## Enumerations

### TokTy

#### Enumeration Members

##### ArrClose

> **ArrClose**: `"]"`

##### ArrOpen

> **ArrOpen**: `"["`

##### F64

> **F64**: `"f64"`

##### Null

> **Null**: `"null"`

## Classes

### Deserializer

#### Extended by

- [`DeserializerUtil`](#deserializerutil)

#### Constructors

##### Constructor

> **new Deserializer**(): [`Deserializer`](#deserializer)

###### Returns

[`Deserializer`](#deserializer)

#### Methods

##### append()

> **append**(`chunk`: `string`): `void`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `chunk`   | `string` |

###### Returns

`void`

##### process()

> **process**(`final`: `boolean`): [`Tok`](#tok)[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

[`Tok`](#tok)[]

##### transformStream()

> **transformStream**(): `TransformStream`\<`string`, [`Tok`](#tok)>\>

###### Returns

`TransformStream`\<`string`, [`Tok`](#tok)\>

---

### DeserializerUtil

#### Extends

- [`Deserializer`](#deserializer)

#### Extended by

- [`DeserializerJson`](Namespace.json.md#deserializerjson)

#### Constructors

##### Constructor

> **new DeserializerUtil**(): [`DeserializerUtil`](#deserializerutil)

###### Returns

[`DeserializerUtil`](#deserializerutil)

###### Inherited from

[`Deserializer`](#deserializer).[`constructor`](#constructor)

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

###### Overrides

[`Deserializer`](#deserializer).[`append`](#append)

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

###### Inherited from

[`Deserializer`](#deserializer).[`process`](#process)

##### transformStream()

> **transformStream**(): `TransformStream`\<`string`, [`Tok`](#tok)>\>

###### Returns

`TransformStream`\<`string`, [`Tok`](#tok)\>

###### Inherited from

[`Deserializer`](#deserializer).[`transformStream`](#transformstream)

---

### Serializer

#### Extended by

- [`SerializerUtil`](#serializerutil)

#### Constructors

##### Constructor

> **new Serializer**(): [`Serializer`](#serializer)

###### Returns

[`Serializer`](#serializer)

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

##### transformStream()

> **transformStream**(): `TransformStream`\<[`Tok`](#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `string`\>

---

### SerializerUtil

#### Extends

- [`Serializer`](#serializer)

#### Extended by

- [`SerializerJson`](Namespace.json.md#serializerjson)

#### Constructors

##### Constructor

> **new SerializerUtil**(): [`SerializerUtil`](#serializerutil)

###### Returns

[`SerializerUtil`](#serializerutil)

###### Inherited from

[`Serializer`](#serializer).[`constructor`](#constructor-2)

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

###### Overrides

[`Serializer`](#serializer).[`append`](#append-2)

##### process()

> **process**(`final`: `boolean`): `string`[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

`string`[]

###### Inherited from

[`Serializer`](#serializer).[`process`](#process-2)

##### shift()

> **shift**(): [`Tok`](#tok) \| `undefined`

###### Returns

[`Tok`](#tok) \| `undefined`

##### transformStream()

> **transformStream**(): `TransformStream`\<[`Tok`](#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `string`\>

###### Inherited from

[`Serializer`](#serializer).[`transformStream`](#transformstream-2)

## Interfaces

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

### TokF64

#### Properties

| Property                      | Type          |
| ----------------------------- | ------------- |
| <a id="property-t-2"></a> `t` | [`F64`](#f64) |
| <a id="property-v"></a> `v`   | `number`      |

---

### TokNull

#### Properties

| Property                      | Type            |
| ----------------------------- | --------------- |
| <a id="property-t-3"></a> `t` | [`Null`](#null) |

## Type Aliases

### JsArr

> **JsArr** = [`JsVal`](#jsval)[]

---

### JsVal

> **JsVal** = `null` \| `number` \| [`JsArr`](#jsarr)

---

### Tok

> **Tok** = [`TokNull`](#toknull) \| [`TokF64`](#tokf64) \| [`TokArrOpen`](#tokarropen) \| [`TokArrClose`](#tokarrclose)
