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

### DeserializerJson

#### Extends

- [`DeserializerUtil`](#deserializerutil)

#### Constructors

##### Constructor

> **new DeserializerJson**(): [`DeserializerJson`](#deserializerjson)

###### Returns

[`DeserializerJson`](#deserializerjson)

###### Inherited from

[`DeserializerUtil`](#deserializerutil).[`constructor`](#constructor-2)

#### Accessors

##### buffer

###### Get Signature

> **get** **buffer**(): `string`

###### Returns

`string`

###### Inherited from

[`DeserializerUtil`](#deserializerutil).[`buffer`](#buffer-1)

##### cursor

###### Get Signature

> **get** **cursor**(): `number`

###### Returns

`number`

###### Inherited from

[`DeserializerUtil`](#deserializerutil).[`cursor`](#cursor-1)

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

[`DeserializerUtil`](#deserializerutil).[`advance`](#advance-1)

##### append()

> **append**(`chunk`: `string`): `void`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `chunk`   | `string` |

###### Returns

`void`

###### Inherited from

[`DeserializerUtil`](#deserializerutil).[`append`](#append-2)

##### match()

> **match**(`re`: `RegExp`): `string` \| `null`

###### Parameters

| Parameter | Type     |
| --------- | -------- |
| `re`      | `RegExp` |

###### Returns

`string` \| `null`

###### Inherited from

[`DeserializerUtil`](#deserializerutil).[`match`](#match-1)

##### process()

> **process**(`final`: `boolean`): [`Tok`](#tok)[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

[`Tok`](#tok)[]

###### Overrides

[`DeserializerUtil`](#deserializerutil).[`process`](#process-2)

##### transformStream()

> **transformStream**(): `TransformStream`\<`string`, [`Tok`](#tok)>\>

###### Returns

`TransformStream`\<`string`, [`Tok`](#tok)\>

###### Inherited from

[`DeserializerUtil`](#deserializerutil).[`transformStream`](#transformstream-2)

---

### DeserializerUtil

#### Extends

- [`Deserializer`](#deserializer)

#### Extended by

- [`DeserializerJson`](#deserializerjson)

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

### SerializerJson

#### Extends

- [`SerializerUtil`](#serializerutil)

#### Constructors

##### Constructor

> **new SerializerJson**(): [`SerializerJson`](#serializerjson)

###### Returns

[`SerializerJson`](#serializerjson)

###### Inherited from

[`SerializerUtil`](#serializerutil).[`constructor`](#constructor-5)

#### Accessors

##### tokens

###### Get Signature

> **get** **tokens**(): [`Tok`](#tok)[]

###### Returns

[`Tok`](#tok)[]

###### Inherited from

[`SerializerUtil`](#serializerutil).[`tokens`](#tokens-1)

#### Methods

##### append()

> **append**(`token`: [`Tok`](#tok)): `void`

###### Parameters

| Parameter | Type          |
| --------- | ------------- |
| `token`   | [`Tok`](#tok) |

###### Returns

`void`

###### Inherited from

[`SerializerUtil`](#serializerutil).[`append`](#append-5)

##### process()

> **process**(`final`: `boolean`): `string`[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

`string`[]

###### Overrides

[`SerializerUtil`](#serializerutil).[`process`](#process-5)

##### shift()

> **shift**(): [`Tok`](#tok) \| `undefined`

###### Returns

[`Tok`](#tok) \| `undefined`

###### Inherited from

[`SerializerUtil`](#serializerutil).[`shift`](#shift-1)

##### transformStream()

> **transformStream**(): `TransformStream`\<[`Tok`](#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `string`\>

###### Inherited from

[`SerializerUtil`](#serializerutil).[`transformStream`](#transformstream-5)

---

### SerializerUtil

#### Extends

- [`Serializer`](#serializer)

#### Extended by

- [`SerializerJson`](#serializerjson)

#### Constructors

##### Constructor

> **new SerializerUtil**(): [`SerializerUtil`](#serializerutil)

###### Returns

[`SerializerUtil`](#serializerutil)

###### Inherited from

[`Serializer`](#serializer).[`constructor`](#constructor-3)

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

[`Serializer`](#serializer).[`append`](#append-3)

##### process()

> **process**(`final`: `boolean`): `string`[]

###### Parameters

| Parameter | Type      |
| --------- | --------- |
| `final`   | `boolean` |

###### Returns

`string`[]

###### Inherited from

[`Serializer`](#serializer).[`process`](#process-3)

##### shift()

> **shift**(): [`Tok`](#tok) \| `undefined`

###### Returns

[`Tok`](#tok) \| `undefined`

##### transformStream()

> **transformStream**(): `TransformStream`\<[`Tok`](#tok), `string`>\>

###### Returns

`TransformStream`\<[`Tok`](#tok), `string`\>

###### Inherited from

[`Serializer`](#serializer).[`transformStream`](#transformstream-3)

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

## Functions

### jsToStream()

> **jsToStream**(`val`: [`JsVal`](#jsval)): `ReadableStream`\<[`Tok`](#tok)>\>

#### Parameters

| Parameter | Type              |
| --------- | ----------------- |
| `val`     | [`JsVal`](#jsval) |

#### Returns

`ReadableStream`\<[`Tok`](#tok)\>

---

### streamToJs()

> **streamToJs**(`stream`: `ReadableStream`\<[`Tok`](#tok)>\>): `Promise`\<[`JsVal`](#jsval)>\>

#### Parameters

| Parameter | Type                              |
| --------- | --------------------------------- |
| `stream`  | `ReadableStream`\<[`Tok`](#tok)\> |

#### Returns

`Promise`\<[`JsVal`](#jsval)\>

---

### streamToString()

> **streamToString**(`stream`: `ReadableStream`\<`string`>\>): `Promise`\<`string`>\>

#### Parameters

| Parameter | Type                         |
| --------- | ---------------------------- |
| `stream`  | `ReadableStream`\<`string`\> |

#### Returns

`Promise`\<`string`\>
