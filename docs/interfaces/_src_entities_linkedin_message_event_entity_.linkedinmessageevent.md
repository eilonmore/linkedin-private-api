**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/linkedin-message-event.entity"](../modules/_src_entities_linkedin_message_event_entity_.md) / LinkedInMessageEvent

# Interface: LinkedInMessageEvent

## Hierarchy

* [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md)

  ↳ **LinkedInMessageEvent**

  ↳↳ [MessageEvent](_src_entities_message_event_entity_.messageevent.md)

## Index

### Properties

* [$type](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#$type)
* [*from](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#*from)
* [backendUrn](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#backendurn)
* [createdAt](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#createdat)
* [dashEntityUrn](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#dashentityurn)
* [entityUrn](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#entityurn)
* [eventContent](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#eventcontent)
* [originToken](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#origintoken)
* [previousEventInConversation](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#previouseventinconversation)
* [quickReplyRecommendations](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#quickreplyrecommendations)
* [subtype](_src_entities_linkedin_message_event_entity_.linkedinmessageevent.md#subtype)

## Properties

### $type

•  **$type**: *typeof* [EVENT\_TYPE](../modules/_src_entities_linkedin_event_entity_.md#event_type)

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[$type](_src_entities_linkedin_event_entity_.linkedinevent.md#$type)*

*Defined in [src/entities/linkedin-event.entity.ts:6](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L6)*

___

### *from

•  ***from**: string

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[*from](_src_entities_linkedin_event_entity_.linkedinevent.md#*from)*

*Defined in [src/entities/linkedin-event.entity.ts:7](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L7)*

___

### backendUrn

•  **backendUrn**: string

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[backendUrn](_src_entities_linkedin_event_entity_.linkedinevent.md#backendurn)*

*Defined in [src/entities/linkedin-event.entity.ts:8](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L8)*

___

### createdAt

•  **createdAt**: number

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[createdAt](_src_entities_linkedin_event_entity_.linkedinevent.md#createdat)*

*Defined in [src/entities/linkedin-event.entity.ts:9](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L9)*

___

### dashEntityUrn

•  **dashEntityUrn**: string

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[dashEntityUrn](_src_entities_linkedin_event_entity_.linkedinevent.md#dashentityurn)*

*Defined in [src/entities/linkedin-event.entity.ts:10](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L10)*

___

### entityUrn

•  **entityUrn**: [LinkedInEventUrn](../modules/_src_entities_linkedin_event_entity_.md#linkedineventurn)

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[entityUrn](_src_entities_linkedin_event_entity_.linkedinevent.md#entityurn)*

*Defined in [src/entities/linkedin-event.entity.ts:11](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L11)*

___

### eventContent

•  **eventContent**: [LinkedInMessage](_src_entities_linkedin_message_entity_.linkedinmessage.md)

*Overrides [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[eventContent](_src_entities_linkedin_event_entity_.linkedinevent.md#eventcontent)*

*Defined in [src/entities/linkedin-message-event.entity.ts:6](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-message-event.entity.ts#L6)*

___

### originToken

•  **originToken**: string

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[originToken](_src_entities_linkedin_event_entity_.linkedinevent.md#origintoken)*

*Defined in [src/entities/linkedin-event.entity.ts:13](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L13)*

___

### previousEventInConversation

• `Optional` **previousEventInConversation**: undefined \| string

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[previousEventInConversation](_src_entities_linkedin_event_entity_.linkedinevent.md#previouseventinconversation)*

*Defined in [src/entities/linkedin-event.entity.ts:15](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L15)*

___

### quickReplyRecommendations

•  **quickReplyRecommendations**: [QuickReplayRecommendation](_src_entities_linkedin_quick_replay_recommendation_entity_.quickreplayrecommendation.md)[]

*Defined in [src/entities/linkedin-message-event.entity.ts:7](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-message-event.entity.ts#L7)*

___

### subtype

•  **subtype**: string

*Inherited from [LinkedInEvent](_src_entities_linkedin_event_entity_.linkedinevent.md).[subtype](_src_entities_linkedin_event_entity_.linkedinevent.md#subtype)*

*Defined in [src/entities/linkedin-event.entity.ts:14](https://github.com/brunohafonso95/linkedin-private-api/blob/466124d/src/entities/linkedin-event.entity.ts#L14)*
