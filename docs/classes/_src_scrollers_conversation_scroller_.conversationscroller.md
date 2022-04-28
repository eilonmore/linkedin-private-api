**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/conversation.scroller"](../modules/_src_scrollers_conversation_scroller_.md) / ConversationScroller

# Class: ConversationScroller

## Hierarchy

* [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)\>

  ↳ **ConversationScroller**

## Index

### Constructors

* [constructor](_src_scrollers_conversation_scroller_.conversationscroller.md#constructor)

### Properties

* [createdBefore](_src_scrollers_conversation_scroller_.conversationscroller.md#createdbefore)
* [fieldName](_src_scrollers_conversation_scroller_.conversationscroller.md#fieldname)
* [recipients](_src_scrollers_conversation_scroller_.conversationscroller.md#recipients)

### Methods

* [fetch](_src_scrollers_conversation_scroller_.conversationscroller.md#fetch)
* [restart](_src_scrollers_conversation_scroller_.conversationscroller.md#restart)
* [scrollBack](_src_scrollers_conversation_scroller_.conversationscroller.md#scrollback)
* [scrollNext](_src_scrollers_conversation_scroller_.conversationscroller.md#scrollnext)

## Constructors

### constructor

\+ **new ConversationScroller**(`__namedParameters`: { createdBefore: undefined \| Date ; fetchConversations: FetchConversations ; recipients: undefined \| string \| string[]  }): [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)

*Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[constructor](_src_scrollers_created_before_scroller_.createdbeforescroller.md#constructor)*

*Defined in [src/scrollers/conversation.scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/conversation.scroller.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { createdBefore: undefined \| Date ; fetchConversations: FetchConversations ; recipients: undefined \| string \| string[]  } |

**Returns:** [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)

## Properties

### createdBefore

• `Optional` **createdBefore**: undefined \| number

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[createdBefore](_src_scrollers_created_before_scroller_.createdbeforescroller.md#createdbefore)*

*Defined in [src/scrollers/created-before-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L4)*

___

### fieldName

•  **fieldName**: \"lastActivityAt\" = "lastActivityAt"

*Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fieldName](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fieldname)*

*Defined in [src/scrollers/conversation.scroller.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/conversation.scroller.ts#L17)*

___

### recipients

• `Optional` **recipients**: [ProfileId](../modules/_src_entities_mini_profile_entity_.md#profileid) \| [ProfileId](../modules/_src_entities_mini_profile_entity_.md#profileid)[]

*Defined in [src/scrollers/conversation.scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/conversation.scroller.ts#L19)*

## Methods

### fetch

▸ **fetch**(): Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

*Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fetch](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fetch)*

*Defined in [src/scrollers/conversation.scroller.ts:37](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/conversation.scroller.ts#L37)*

**Returns:** Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

___

### restart

▸ **restart**(): void

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[restart](_src_scrollers_created_before_scroller_.createdbeforescroller.md#restart)*

*Defined in [src/scrollers/created-before-scroller.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L43)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollBack](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollback)*

*Defined in [src/scrollers/created-before-scroller.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L33)*

**Returns:** Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

*Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollNext](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollnext)*

*Defined in [src/scrollers/created-before-scroller.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/created-before-scroller.ts#L18)*

**Returns:** Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>
