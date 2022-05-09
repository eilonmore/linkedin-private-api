**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/message.scroller"](../modules/_src_scrollers_message_scroller_.md) / MessageScroller

# Class: MessageScroller

## Hierarchy

* [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)\>

  ↳ **MessageScroller**

## Index

### Constructors

* [constructor](_src_scrollers_message_scroller_.messagescroller.md#constructor)

### Properties

* [createdBefore](_src_scrollers_message_scroller_.messagescroller.md#createdbefore)
* [fieldName](_src_scrollers_message_scroller_.messagescroller.md#fieldname)

### Methods

* [fetch](_src_scrollers_message_scroller_.messagescroller.md#fetch)
* [restart](_src_scrollers_message_scroller_.messagescroller.md#restart)
* [scrollBack](_src_scrollers_message_scroller_.messagescroller.md#scrollback)
* [scrollNext](_src_scrollers_message_scroller_.messagescroller.md#scrollnext)

## Constructors

### constructor

\+ **new MessageScroller**(`__namedParameters`: { conversationId: string ; createdBefore: undefined \| Date ; fetchMessages: FetchMessages  }): [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

*Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[constructor](_src_scrollers_created_before_scroller_.createdbeforescroller.md#constructor)*

*Defined in [src/scrollers/message.scroller.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/message.scroller.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { conversationId: string ; createdBefore: undefined \| Date ; fetchMessages: FetchMessages  } |

**Returns:** [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

## Properties

### createdBefore

• `Optional` **createdBefore**: undefined \| number

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[createdBefore](_src_scrollers_created_before_scroller_.createdbeforescroller.md#createdbefore)*

*Defined in [src/scrollers/created-before-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L4)*

___

### fieldName

•  **fieldName**: \"createdAt\" = "createdAt"

*Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fieldName](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fieldname)*

*Defined in [src/scrollers/message.scroller.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/message.scroller.ts#L20)*

## Methods

### fetch

▸ **fetch**(): Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

*Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fetch](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fetch)*

*Defined in [src/scrollers/message.scroller.ts:37](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/message.scroller.ts#L37)*

**Returns:** Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

___

### restart

▸ **restart**(): void

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[restart](_src_scrollers_created_before_scroller_.createdbeforescroller.md#restart)*

*Defined in [src/scrollers/created-before-scroller.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L43)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollBack](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollback)*

*Defined in [src/scrollers/created-before-scroller.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L33)*

**Returns:** Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollNext](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollnext)*

*Defined in [src/scrollers/created-before-scroller.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L18)*

**Returns:** Promise<[MessageEvent](../interfaces/_src_entities_message_event_entity_.messageevent.md)[]\>
