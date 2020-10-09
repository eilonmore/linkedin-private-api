**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/conversation.repository"](../modules/_src_repositories_conversation_repository_.md) / ConversationRepository

# Class: ConversationRepository

## Hierarchy

* **ConversationRepository**

## Index

### Constructors

* [constructor](_src_repositories_conversation_repository_.conversationrepository.md#constructor)

### Methods

* [getConversation](_src_repositories_conversation_repository_.conversationrepository.md#getconversation)
* [getConversations](_src_repositories_conversation_repository_.conversationrepository.md#getconversations)

## Constructors

### constructor

\+ **new ConversationRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [ConversationRepository](_src_repositories_conversation_repository_.conversationrepository.md)

*Defined in src/repositories/conversation.repository.ts:35*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [ConversationRepository](_src_repositories_conversation_repository_.conversationrepository.md)

## Methods

### getConversation

▸ **getConversation**(`__namedParameters`: { conversationId: string  }): Promise\<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)>

*Defined in src/repositories/conversation.repository.ts:41*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { conversationId: string  } |

**Returns:** Promise\<[Conversation](../interfaces/_src_entities_conversation_entity_.conversation.md)>

___

### getConversations

▸ **getConversations**(`__namedParameters`: { createdBefore: undefined \| Date  }): [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)

*Defined in src/repositories/conversation.repository.ts:52*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { createdBefore: undefined \| Date  } | {} |

**Returns:** [ConversationScroller](_src_scrollers_conversation_scroller_.conversationscroller.md)
