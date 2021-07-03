**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/conversation.scroller"](../modules/_src_scrollers_conversation_scroller_.md) / ConversationScroller

# Class: ConversationScroller

## Hierarchy

- [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md)<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)\>

  ↳ **ConversationScroller**

## Index

### Constructors

- [constructor](_src_scrollers_conversation_scroller_.conversationscroller.md#constructor)

### Properties

- [createdBefore](_src_scrollers_conversation_scroller_.conversationscroller.md#createdbefore)
- [fieldName](_src_scrollers_conversation_scroller_.conversationscroller.md#fieldname)
- [recipients](_src_scrollers_conversation_scroller_.conversationscroller.md#recipients)

### Methods

- [fetch](_src_scrollers_conversation_scroller_.conversationscroller.md#fetch)
- [restart](_src_scrollers_conversation_scroller_.conversationscroller.md#restart)
- [scrollBack](_src_scrollers_conversation_scroller_.conversationscroller.md#scrollback)
- [scrollNext](_src_scrollers_conversation_scroller_.conversationscroller.md#scrollnext)

## Constructors

### constructor

\+ **new ConversationScroller**(`__namedParameters`: { createdBefore: undefined \| Date ; fetchConversations: FetchConversations ; recipients: undefined \| string \| string[] }): [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)

_Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[constructor](_src_scrollers_created_before_scroller_.createdbeforescroller.md#constructor)_

_Defined in [src/scrollers/conversation.scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/conversation.scroller.ts#L19)_

#### Parameters:

| Name                | Type                                                                                                                        |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters` | { createdBefore: undefined \| Date ; fetchConversations: FetchConversations ; recipients: undefined \| string \| string[] } |

**Returns:** [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)

## Properties

### createdBefore

• `Optional` **createdBefore**: undefined \| number

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[createdBefore](_src_scrollers_created_before_scroller_.createdbeforescroller.md#createdbefore)_

_Defined in [src/scrollers/created-before-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L4)_

---

### fieldName

• **fieldName**: \"lastActivityAt\" = "lastActivityAt"

_Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fieldName](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fieldname)_

_Defined in [src/scrollers/conversation.scroller.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/conversation.scroller.ts#L17)_

---

### recipients

• `Optional` **recipients**: [ProfileId](../modules/_src_entities_mini_profile_entity_.md#profileid) \| [ProfileId](../modules/_src_entities_mini_profile_entity_.md#profileid)[]

_Defined in [src/scrollers/conversation.scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/conversation.scroller.ts#L19)_

## Methods

### fetch

▸ **fetch**(): Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

_Overrides [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[fetch](_src_scrollers_created_before_scroller_.createdbeforescroller.md#fetch)_

_Defined in [src/scrollers/conversation.scroller.ts:37](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/conversation.scroller.ts#L37)_

**Returns:** Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

---

### restart

▸ **restart**(): void

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[restart](_src_scrollers_created_before_scroller_.createdbeforescroller.md#restart)_

_Defined in [src/scrollers/created-before-scroller.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L43)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollBack](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollback)_

_Defined in [src/scrollers/created-before-scroller.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L33)_

**Returns:** Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>

_Inherited from [CreatedBeforeScroller](_src_scrollers_created_before_scroller_.createdbeforescroller.md).[scrollNext](_src_scrollers_created_before_scroller_.createdbeforescroller.md#scrollnext)_

_Defined in [src/scrollers/created-before-scroller.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/created-before-scroller.ts#L18)_

**Returns:** Promise<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)[]\>
