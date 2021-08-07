**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/message-event.entity"](../modules/_src_entities_message_event_entity_.md) / MessageEvent

# Interface: MessageEvent

## Hierarchy

- [LinkedInMessageEvent](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md)

  ↳ **MessageEvent**

## Index

### Properties

- [$type](_src_entities_message_event_entity_.messageevent.md#$type)
- [\*from](_src_entities_message_event_entity_.messageevent.md#*from)
- [backendUrn](_src_entities_message_event_entity_.messageevent.md#backendurn)
- [createdAt](_src_entities_message_event_entity_.messageevent.md#createdat)
- [dashEntityUrn](_src_entities_message_event_entity_.messageevent.md#dashentityurn)
- [entityUrn](_src_entities_message_event_entity_.messageevent.md#entityurn)
- [eventContent](_src_entities_message_event_entity_.messageevent.md#eventcontent)
- [originToken](_src_entities_message_event_entity_.messageevent.md#origintoken)
- [previousEventInConversation](_src_entities_message_event_entity_.messageevent.md#previouseventinconversation)
- [quickReplyRecommendations](_src_entities_message_event_entity_.messageevent.md#quickreplyrecommendations)
- [sentFrom](_src_entities_message_event_entity_.messageevent.md#sentfrom)
- [subtype](_src_entities_message_event_entity_.messageevent.md#subtype)
- [text](_src_entities_message_event_entity_.messageevent.md#text)

## Properties

### $type

• **$type**: _typeof_ [EVENT_TYPE](../modules/_src_entities_linkedin_event_entity_.md#event_type)

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[$type](_src_entities_linkedin_event_entity_.linkedinevent.md#$type)_

_Defined in [src/entities/linkedin-event.entity.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L6)_

---

### \*from

• **\*from**: string

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[*from](_src_entities_linkedin_event_entity_.linkedinevent.md#_from)_

_Defined in [src/entities/linkedin-event.entity.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L7)_

---

### backendUrn

• **backendUrn**: string

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[backendUrn](_src_entities_linkedin_event_entity_.linkedinevent.md#backendurn)_

_Defined in [src/entities/linkedin-event.entity.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L8)_

---

### createdAt

• **createdAt**: number

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[createdAt](_src_entities_linkedin_event_entity_.linkedinevent.md#createdat)_

_Defined in [src/entities/linkedin-event.entity.ts:9](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L9)_

---

### dashEntityUrn

• **dashEntityUrn**: string

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[dashEntityUrn](_src_entities_linkedin_event_entity_.linkedinevent.md#dashentityurn)_

_Defined in [src/entities/linkedin-event.entity.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L10)_

---

### entityUrn

• **entityUrn**: [LinkedInEventUrn](../modules/_src_entities_linkedin_event_entity_.md#linkedineventurn)

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[entityUrn](_src_entities_linkedin_event_entity_.linkedinevent.md#entityurn)_

_Defined in [src/entities/linkedin-event.entity.ts:11](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L11)_

---

### eventContent

• **eventContent**: [LinkedInMessage](_src_entities_linkedin_message_entity_.linkedinmessage.md)

_Inherited from [LinkedInMessageEvent](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md).[eventContent](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#eventcontent)_

_Overrides [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[eventContent](_src_entities_linkedin_event_entity_.linkedinevent.md#eventcontent)_

_Defined in [src/entities/linkedin-message-event.entity.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-message-event.entity.ts#L6)_

---

### originToken

• **originToken**: string

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[originToken](_src_entities_linkedin_event_entity_.linkedinevent.md#origintoken)_

_Defined in [src/entities/linkedin-event.entity.ts:13](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L13)_

---

### previousEventInConversation

• `Optional` **previousEventInConversation**: undefined \| string

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[previousEventInConversation](_src_entities_linkedin_event_entity_.linkedinevent.md#previouseventinconversation)_

_Defined in [src/entities/linkedin-event.entity.ts:15](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L15)_

---

### quickReplyRecommendations

• **quickReplyRecommendations**: [QuickReplayRecommendation](_src_entities_linkedin_quick_replay_recommendation_entity_.quickreplayrecommendation.md)[]

_Inherited from [LinkedInMessageEvent](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md).[quickReplyRecommendations](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#quickreplyrecommendations)_

_Defined in [src/entities/linkedin-message-event.entity.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-message-event.entity.ts#L7)_

---

### sentFrom

• **sentFrom**: [MiniProfile](_src_entities_mini_profile_entity_.miniprofile.md)

_Defined in [src/entities/message-event.entity.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/message-event.entity.ts#L6)_

---

### subtype

• **subtype**: string

_Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[subtype](_src_entities_linkedin_event_entity_.linkedinevent.md#subtype)_

_Defined in [src/entities/linkedin-event.entity.ts:14](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-event.entity.ts#L14)_

---

### text

• **text**: string

_Defined in [src/entities/message-event.entity.ts:5](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/message-event.entity.ts#L5)_
