**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/message.repository"](../modules/_src_repositories_message_repository_.md) / MessageRepository

# Class: MessageRepository

## Hierarchy

* **MessageRepository**

## Index

### Constructors

* [constructor](_src_repositories_message_repository_.messagerepository.md#constructor)

### Methods

* [getMessages](_src_repositories_message_repository_.messagerepository.md#getmessages)
* [sendMessage](_src_repositories_message_repository_.messagerepository.md#sendmessage)

## Constructors

### constructor

\+ **new MessageRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [MessageRepository](_src_repositories_message_repository_.messagerepository.md)

*Defined in [src/repositories/message.repository.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/message.repository.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [MessageRepository](_src_repositories_message_repository_.messagerepository.md)

## Methods

### getMessages

▸ **getMessages**(`__namedParameters`: { conversationId: string ; createdBefore: undefined \| Date  }): [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

*Defined in [src/repositories/message.repository.ts:24](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/message.repository.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { conversationId: string ; createdBefore: undefined \| Date  } |

**Returns:** [MessageScroller](_src_scrollers_message_scroller_.messagescroller.md)

___

### sendMessage

▸ **sendMessage**(`__namedParameters`: { conversationId: undefined \| string ; profileId: undefined \| string ; text: string  }): Promise<[MessageEventCreateResponse](../interfaces/_src_entities_message_create_response_entity_.messageeventcreateresponse.md)\>

*Defined in [src/repositories/message.repository.ts:28](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/message.repository.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { conversationId: undefined \| string ; profileId: undefined \| string ; text: string  } |

**Returns:** Promise<[MessageEventCreateResponse](../interfaces/_src_entities_message_create_response_entity_.messageeventcreateresponse.md)\>
