**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/created-before-scroller"](../modules/_src_scrollers_created_before_scroller_.md) / CreatedBeforeScroller

# Class: CreatedBeforeScroller<T\>

## Type parameters

| Name |
| ---- |
| `T`  |

## Hierarchy

- **CreatedBeforeScroller**

  ↳ [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)

  ↳ [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

## Index

### Constructors

- [constructor](_src_scrollers_created_before_scroller_.createdbeforescroller.md#constructor)

### Properties

- [createdBefore](_src_scrollers_created_before_scroller_.createdbeforescroller.md#createdbefore)
- [fieldName](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fieldname)

### Methods

- [fetch](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fetch)
- [restart](_src_scrollers_created_before_scroller_.createdbeforescroller.md#restart)
- [scrollBack](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollback)
- [scrollNext](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollnext)

## Constructors

### constructor

\+ **new CreatedBeforeScroller**(`__namedParameters`: { createdBefore: undefined \| Date }): [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)

_Defined in [src/scrollers/created-before-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/created-before-scroller.ts#L10)_

#### Parameters:

| Name                | Type                                 |
| ------------------- | ------------------------------------ |
| `__namedParameters` | { createdBefore: undefined \| Date } |

**Returns:** [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)

## Properties

### createdBefore

• `Optional` **createdBefore**: undefined \| number

_Defined in [src/scrollers/created-before-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/created-before-scroller.ts#L4)_

---

### fieldName

• `Abstract` **fieldName**: keyof T

_Defined in [src/scrollers/created-before-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/created-before-scroller.ts#L10)_

## Methods

### fetch

▸ `Abstract`**fetch**(): Promise<T[]\>

_Defined in [src/scrollers/created-before-scroller.ts:16](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/created-before-scroller.ts#L16)_

**Returns:** Promise<T[]\>

---

### restart

▸ **restart**(): void

_Defined in [src/scrollers/created-before-scroller.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/created-before-scroller.ts#L43)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<T[]\>

_Defined in [src/scrollers/created-before-scroller.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/created-before-scroller.ts#L33)_

**Returns:** Promise<T[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<T[]\>

_Defined in [src/scrollers/created-before-scroller.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/created-before-scroller.ts#L18)_

**Returns:** Promise<T[]\>
