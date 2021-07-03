**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/message.scroller"](../modules/_src_scrollers_message_scroller_.md) / MessageScroller

# Class: MessageScroller

## Hierarchy

- [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)\>

  ↳ **MessageScroller**

## Index

### Constructors

- [constructor](_src_scrollers_message_scroller_.messagescroller.md#constructor)

### Properties

- [createdBefore](_src_scrollers_message_scroller_.messagescroller.md#createdbefore)
- [fieldName](_src_scrollers_message_scroller_.messagescroller.md#fieldname)

### Methods

- [fetch](_src_scrollers_message_scroller_.messagescroller.md#fetch)
- [restart](_src_scrollers_message_scroller_.messagescroller.md#restart)
- [scrollBack](_src_scrollers_message_scroller_.messagescroller.md#scrollback)
- [scrollNext](_src_scrollers_message_scroller_.messagescroller.md#scrollnext)

## Constructors

### constructor

\+ **new MessageScroller**(`__namedParameters`: { conversationId: string ; createdBefore: undefined \| Date ; fetchMessages: FetchMessages }): [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

_Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[constructor](_src_scrollers_created_before_scroller_.createdbeforescroller.md#constructor)_

_Defined in [src/scrollers/message.scroller.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/message.scroller.ts#L20)_

#### Parameters:

| Name                | Type                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `__namedParameters` | { conversationId: string ; createdBefore: undefined \| Date ; fetchMessages: FetchMessages } |

**Returns:** [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

## Properties

### createdBefore

• `Optional` **createdBefore**: undefined \| number

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[createdBefore](_src_scrollers_created_before_scroller_.createdbeforescroller.md#createdbefore)_

_Defined in [src/scrollers/created-before-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L4)_

---

### fieldName

• **fieldName**: \"createdAt\" = "createdAt"

_Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fieldName](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fieldname)_

_Defined in [src/scrollers/message.scroller.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/message.scroller.ts#L20)_

## Methods

### fetch

▸ **fetch**(): Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

_Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fetch](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fetch)_

_Defined in [src/scrollers/message.scroller.ts:37](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/message.scroller.ts#L37)_

**Returns:** Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

---

### restart

▸ **restart**(): void

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[restart](_src_scrollers_created_before_scroller_.createdbeforescroller.md#restart)_

_Defined in [src/scrollers/created-before-scroller.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L43)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollBack](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollback)_

_Defined in [src/scrollers/created-before-scroller.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L33)_

**Returns:** Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollNext](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollnext)_

_Defined in [src/scrollers/created-before-scroller.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L18)_

**Returns:** Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>
