**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/conversation.entity"](../modules/_src_entities_conversation_entity_.md) / Conversation

# Interface: Conversation

## Hierarchy

- [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md)

  ↳ **Conversation**

## Index

### Properties

- [$type](_src_entities_conversation_entity_.conversation.md#$type)
- [\*events](_src_entities_conversation_entity_.conversation.md#*events)
- [\*participants](_src_entities_conversation_entity_.conversation.md#*participants)
- [\*type](_src_entities_conversation_entity_.conversation.md#*type)
- [archived](_src_entities_conversation_entity_.conversation.md#archived)
- [backendUrn](_src_entities_conversation_entity_.conversation.md#backendurn)
- [blocked](_src_entities_conversation_entity_.conversation.md#blocked)
- [conversationId](_src_entities_conversation_entity_.conversation.md#conversationid)
- [entityUrn](_src_entities_conversation_entity_.conversation.md#entityurn)
- [featureTypes](_src_entities_conversation_entity_.conversation.md#featuretypes)
- [firstMessageUrn](_src_entities_conversation_entity_.conversation.md#firstmessageurn)
- [lastActivityAt](_src_entities_conversation_entity_.conversation.md#lastactivityat)
- [muted](_src_entities_conversation_entity_.conversation.md#muted)
- [notificationStatus](_src_entities_conversation_entity_.conversation.md#notificationstatus)
- [participants](_src_entities_conversation_entity_.conversation.md#participants)
- [read](_src_entities_conversation_entity_.conversation.md#read)
- [receipts](_src_entities_conversation_entity_.conversation.md#receipts)
- [totalEventCount](_src_entities_conversation_entity_.conversation.md#totaleventcount)
- [unreadCount](_src_entities_conversation_entity_.conversation.md#unreadcount)
- [viewerCurrentParticipant](_src_entities_conversation_entity_.conversation.md#viewercurrentparticipant)
- [withNonConnection](_src_entities_conversation_entity_.conversation.md#withnonconnection)

## Properties

### $type

• **$type**: _typeof_ [CONVERSATION_TYPE](../modules/_src_entities_linkedin_conversation_entity_.md#conversation_type)

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[$type](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#$type)_

_Defined in [src/entities/linkedin-conversation.entity.ts:26](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L26)_

---

### \*events

• **\*events**: string[]

*Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[*events](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#_events)_

_Defined in [src/entities/linkedin-conversation.entity.ts:27](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L27)_

---

### \*participants

• **\*participants**: string[]

*Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[*participants](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#_participants)_

_Defined in [src/entities/linkedin-conversation.entity.ts:28](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L28)_

---

### \*type

• **\*type**: string[]

*Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[*type](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#_type)_

_Defined in [src/entities/linkedin-conversation.entity.ts:29](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L29)_

---

### archived

• **archived**: boolean

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[archived](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#archived)_

_Defined in [src/entities/linkedin-conversation.entity.ts:30](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L30)_

---

### backendUrn

• **backendUrn**: string

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[backendUrn](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#backendurn)_

_Defined in [src/entities/linkedin-conversation.entity.ts:31](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L31)_

---

### blocked

• **blocked**: boolean

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[blocked](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#blocked)_

_Defined in [src/entities/linkedin-conversation.entity.ts:32](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L32)_

---

### conversationId

• **conversationId**: [ConversationId](../modules/_src_entities_conversation_entity_.md#conversationid)

_Defined in [src/entities/conversation.entity.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/conversation.entity.ts#L7)_

---

### entityUrn

• **entityUrn**: [ConversationUrn](../modules/_src_entities_linkedin_conversation_entity_.md#conversationurn)

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[entityUrn](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#entityurn)_

_Defined in [src/entities/linkedin-conversation.entity.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L33)_

---

### featureTypes

• **featureTypes**: [FeaturedType](../enums/_src_entities_linkedin_conversation_entity_.featuredtype.md)[]

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[featureTypes](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#featuretypes)_

_Defined in [src/entities/linkedin-conversation.entity.ts:34](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L34)_

---

### firstMessageUrn

• **firstMessageUrn**: string

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[firstMessageUrn](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#firstmessageurn)_

_Defined in [src/entities/linkedin-conversation.entity.ts:35](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L35)_

---

### lastActivityAt

• **lastActivityAt**: number

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[lastActivityAt](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#lastactivityat)_

_Defined in [src/entities/linkedin-conversation.entity.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L36)_

---

### muted

• **muted**: boolean

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[muted](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#muted)_

_Defined in [src/entities/linkedin-conversation.entity.ts:37](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L37)_

---

### notificationStatus

• **notificationStatus**: string

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[notificationStatus](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#notificationstatus)_

_Defined in [src/entities/linkedin-conversation.entity.ts:38](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L38)_

---

### participants

• **participants**: [MiniProfile](_src_entities_mini_profile_entity_.miniprofile.md)[]

_Defined in [src/entities/conversation.entity.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/conversation.entity.ts#L8)_

---

### read

• **read**: boolean

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[read](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#read)_

_Defined in [src/entities/linkedin-conversation.entity.ts:39](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L39)_

---

### receipts

• **receipts**: [LinkedInParticipantReceipts](_src_entities_linkedin_conversation_entity_.linkedinparticipantreceipts.md)[]

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[receipts](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#receipts)_

_Defined in [src/entities/linkedin-conversation.entity.ts:40](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L40)_

---

### totalEventCount

• **totalEventCount**: number

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[totalEventCount](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#totaleventcount)_

_Defined in [src/entities/linkedin-conversation.entity.ts:41](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L41)_

---

### unreadCount

• **unreadCount**: number

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[unreadCount](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#unreadcount)_

_Defined in [src/entities/linkedin-conversation.entity.ts:42](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L42)_

---

### viewerCurrentParticipant

• **viewerCurrentParticipant**: boolean

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[viewerCurrentParticipant](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#viewercurrentparticipant)_

_Defined in [src/entities/linkedin-conversation.entity.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L43)_

---

### withNonConnection

• **withNonConnection**: boolean

_Inherited from [LinkedinConversation](_src_entities_linkedin_conversation_entity_.linkedinconversation.md).[withNonConnection](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#withnonconnection)_

_Defined in [src/entities/linkedin-conversation.entity.ts:44](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-conversation.entity.ts#L44)_
