## Functions

### jsToStream()

> **jsToStream**(`val`: [`JsVal`](Namespace.types.md#jsval)): `ReadableStream`\<[`Tok`](Namespace.types.md#tok)>\>

#### Parameters

| Parameter | Type                                |
| --------- | ----------------------------------- |
| `val`     | [`JsVal`](Namespace.types.md#jsval) |

#### Returns

`ReadableStream`\<[`Tok`](Namespace.types.md#tok)\>

---

### streamToJs()

> **streamToJs**(`stream`: `ReadableStream`\<[`Tok`](Namespace.types.md#tok)>\>): `Promise`\<[`JsVal`](Namespace.types.md#jsval)>\>

#### Parameters

| Parameter | Type                                                |
| --------- | --------------------------------------------------- |
| `stream`  | `ReadableStream`\<[`Tok`](Namespace.types.md#tok)\> |

#### Returns

`Promise`\<[`JsVal`](Namespace.types.md#jsval)\>

---

### streamToString()

> **streamToString**(`stream`: `ReadableStream`\<`string`>\>): `Promise`\<`string`>\>

#### Parameters

| Parameter | Type                         |
| --------- | ---------------------------- |
| `stream`  | `ReadableStream`\<`string`\> |

#### Returns

`Promise`\<`string`\>
