**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/created-before-scroller"](../modules/_src_scrollers_created_before_scroller_.md) / CreatedBeforeScroller

# Class: CreatedBeforeScroller<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **CreatedBeforeScroller**

  ↳ [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)

  ↳ [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

## Index

### Constructors

* [constructor](_src_scrollers_created_before_scroller_.createdbeforescroller.md#constructor)

### Properties

* [createdBefore](_src_scrollers_created_before_scroller_.createdbeforescroller.md#createdbefore)
* [fieldName](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fieldname)

### Methods

* [fetch](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fetch)
* [restart](_src_scrollers_created_before_scroller_.createdbeforescroller.md#restart)
* [scrollBack](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollback)
* [scrollNext](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollnext)

## Constructors

### constructor

\+ **new CreatedBeforeScroller**(`__namedParameters`: { createdBefore: undefined \| Date  }): [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)

*Defined in [src/scrollers/created-before-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { createdBefore: undefined \| Date  } |

**Returns:** [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)

## Properties

### createdBefore

• `Optional` **createdBefore**: undefined \| number

*Defined in [src/scrollers/created-before-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L4)*

___

### fieldName

• `Abstract` **fieldName**: keyof T

*Defined in [src/scrollers/created-before-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L10)*

## Methods

### fetch

▸ `Abstract`**fetch**(): Promise<T[]\>

*Defined in [src/scrollers/created-before-scroller.ts:16](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L16)*

**Returns:** Promise<T[]\>

___

### restart

▸ **restart**(): void

*Defined in [src/scrollers/created-before-scroller.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L43)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<T[]\>

*Defined in [src/scrollers/created-before-scroller.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L33)*

**Returns:** Promise<T[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<T[]\>

*Defined in [src/scrollers/created-before-scroller.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L18)*

**Returns:** Promise<T[]\>
