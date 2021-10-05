**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/core/client"](../modules/_src_core_client_.md) / Client

# Class: Client

## Hierarchy

* **Client**

## Index

### Constructors

* [constructor](_src_core_client_.client.md#constructor)

### Properties

* [conversation](_src_core_client_.client.md#conversation)
* [invitation](_src_core_client_.client.md#invitation)
* [login](_src_core_client_.client.md#login)
* [message](_src_core_client_.client.md#message)
* [profile](_src_core_client_.client.md#profile)
* [request](_src_core_client_.client.md#request)
* [search](_src_core_client_.client.md#search)

## Constructors

### constructor

\+ **new Client**(`proxy?`: AxiosProxyConfig): [Client](_src_core_client_.client.md)

*Defined in [src/core/client.ts:14](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`proxy?` | AxiosProxyConfig |

**Returns:** [Client](_src_core_client_.client.md)

## Properties

### conversation

•  **conversation**: [ConversationRepository](_src_repositories_conversation_repository_.conversationrepository.md) = new ConversationRepository({ client: this })

*Defined in [src/core/client.ts:30](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L30)*

___

### invitation

•  **invitation**: [InvitationRepository](_src_repositories_invitation_repository_.invitationrepository.md) = new InvitationRepository({ client: this })

*Defined in [src/core/client.ts:26](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L26)*

___

### login

•  **login**: [Login](_src_core_login_.login.md) = new Login({ client: this })

*Defined in [src/core/client.ts:22](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L22)*

___

### message

•  **message**: [MessageRepository](_src_repositories_message_repository_.messagerepository.md) = new MessageRepository({ client: this })

*Defined in [src/core/client.ts:32](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L32)*

___

### profile

•  **profile**: [ProfileRepository](_src_repositories_profile_repository_.profilerepository.md) = new ProfileRepository({ client: this })

*Defined in [src/core/client.ts:28](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L28)*

___

### request

•  **request**: [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

*Defined in [src/core/client.ts:14](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L14)*

___

### search

•  **search**: [SearchRepository](_src_repositories_search_repository_.searchrepository.md) = new SearchRepository({ client: this })

*Defined in [src/core/client.ts:24](https://github.com/cosiall/linkedin-private-api/blob/288d758/src/core/client.ts#L24)*
