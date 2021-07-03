**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/linkedin-conversation.entity"](../modules/_src_entities_linkedin_conversation_entity_.md) / LinkedinConversation

# Interface: LinkedinConversation

## Hierarchy

- **LinkedinConversation**

  ↳ [Conversation](_src_entities_conversation_entity_.conversation.md)

## Index

### Properties

- [$type](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#$type)
- [\*events](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#*events)
- [\*participants](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#*participants)
- [\*type](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#*type)
- [archived](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#archived)
- [backendUrn](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#backendurn)
- [blocked](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#blocked)
- [entityUrn](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#entityurn)
- [featureTypes](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#featuretypes)
- [firstMessageUrn](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#firstmessageurn)
- [lastActivityAt](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#lastactivityat)
- [muted](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#muted)
- [notificationStatus](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#notificationstatus)
- [read](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#read)
- [receipts](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#receipts)
- [totalEventCount](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#totaleventcount)
- [unreadCount](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#unreadcount)
- [viewerCurrentParticipant](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#viewercurrentparticipant)
- [withNonConnection](_src_entities_linkedin_conversation_entity_.linkedinconversation.md#withnonconnection)

## Properties

### $type

• **$type**: _typeof_ [CONVERSATION_TYPE](../modules/_src_entities_linkedin_conversation_entity_.md#conversation_type)

_Defined in [src/entities/linkedin-conversation.entity.ts:26](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L26)_

---

### \*events

• **\*events**: string[]

_Defined in [src/entities/linkedin-conversation.entity.ts:27](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L27)_

---

### \*participants

• **\*participants**: string[]

_Defined in [src/entities/linkedin-conversation.entity.ts:28](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L28)_

---

### \*type

• **\*type**: string[]

_Defined in [src/entities/linkedin-conversation.entity.ts:29](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L29)_

---

### archived

• **archived**: boolean

_Defined in [src/entities/linkedin-conversation.entity.ts:30](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L30)_

---

### backendUrn

• **backendUrn**: string

_Defined in [src/entities/linkedin-conversation.entity.ts:31](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L31)_

---

### blocked

• **blocked**: boolean

_Defined in [src/entities/linkedin-conversation.entity.ts:32](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L32)_

---

### entityUrn

• **entityUrn**: [ConversationUrn](../modules/_src_entities_linkedin_conversation_entity_.md#conversationurn)

_Defined in [src/entities/linkedin-conversation.entity.ts:33](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L33)_

---

### featureTypes

• **featureTypes**: [FeaturedType](../enums/_src_entities_linkedin_conversation_entity_.featuredtype.md)[]

_Defined in [src/entities/linkedin-conversation.entity.ts:34](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L34)_

---

### firstMessageUrn

• **firstMessageUrn**: string

_Defined in [src/entities/linkedin-conversation.entity.ts:35](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L35)_

---

### lastActivityAt

• **lastActivityAt**: number

_Defined in [src/entities/linkedin-conversation.entity.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L36)_

---

### muted

• **muted**: boolean

_Defined in [src/entities/linkedin-conversation.entity.ts:37](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L37)_

---

### notificationStatus

• **notificationStatus**: string

_Defined in [src/entities/linkedin-conversation.entity.ts:38](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L38)_

---

### read

• **read**: boolean

_Defined in [src/entities/linkedin-conversation.entity.ts:39](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L39)_

---

### receipts

• **receipts**: [LinkedInParticipantReceipts](_src_entities_linkedin_conversation_entity_.linkedinparticipantreceipts.md)[]

_Defined in [src/entities/linkedin-conversation.entity.ts:40](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L40)_

---

### totalEventCount

• **totalEventCount**: number

_Defined in [src/entities/linkedin-conversation.entity.ts:41](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L41)_

---

### unreadCount

• **unreadCount**: number

_Defined in [src/entities/linkedin-conversation.entity.ts:42](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L42)_

---

### viewerCurrentParticipant

• **viewerCurrentParticipant**: boolean

_Defined in [src/entities/linkedin-conversation.entity.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L43)_

---

### withNonConnection

• **withNonConnection**: boolean

_Defined in [src/entities/linkedin-conversation.entity.ts:44](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/entities/linkedin-conversation.entity.ts#L44)_
