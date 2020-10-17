**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/people-search-hit.entity"](../modules/_src_entities_people_search_hit_entity_.md) / PeopleSearchHit

# Interface: PeopleSearchHit

## Hierarchy

* [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md)

  ↳ **PeopleSearchHit**

## Index

### Properties

* [$type](_src_entities_people_search_hit_entity_.peoplesearchhit.md#$type)
* [*badges](_src_entities_people_search_hit_entity_.peoplesearchhit.md#*badges)
* [headless](_src_entities_people_search_hit_entity_.peoplesearchhit.md#headless)
* [headline](_src_entities_people_search_hit_entity_.peoplesearchhit.md#headline)
* [image](_src_entities_people_search_hit_entity_.peoplesearchhit.md#image)
* [memberDistance](_src_entities_people_search_hit_entity_.peoplesearchhit.md#memberdistance)
* [nameMatch](_src_entities_people_search_hit_entity_.peoplesearchhit.md#namematch)
* [navigationUrl](_src_entities_people_search_hit_entity_.peoplesearchhit.md#navigationurl)
* [profile](_src_entities_people_search_hit_entity_.peoplesearchhit.md#profile)
* [publicIdentifier](_src_entities_people_search_hit_entity_.peoplesearchhit.md#publicidentifier)
* [secondaryTitle](_src_entities_people_search_hit_entity_.peoplesearchhit.md#secondarytitle)
* [socialProofText](_src_entities_people_search_hit_entity_.peoplesearchhit.md#socialprooftext)
* [subline](_src_entities_people_search_hit_entity_.peoplesearchhit.md#subline)
* [targetUrn](_src_entities_people_search_hit_entity_.peoplesearchhit.md#targeturn)
* [title](_src_entities_people_search_hit_entity_.peoplesearchhit.md#title)
* [trackingId](_src_entities_people_search_hit_entity_.peoplesearchhit.md#trackingid)
* [trackingUrn](_src_entities_people_search_hit_entity_.peoplesearchhit.md#trackingurn)
* [type](_src_entities_people_search_hit_entity_.peoplesearchhit.md#type)

## Properties

### $type

•  **$type**: \"com.linkedin.voyager.search.SearchHitV2\"

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[$type](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#$type)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:5](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L5)*

___

### *badges

•  ***badges**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[*badges](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#*badges)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L6)*

___

### headless

•  **headless**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[headless](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#headless)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L7)*

___

### headline

•  **headline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[headline](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#headline)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L8)*

___

### image

•  **image**: [LinkedInImageViewModel](_src_entities_linkedin_image_view_model_entity_.linkedinimageviewmodel.md)

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[image](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#image)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:9](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L9)*

___

### memberDistance

•  **memberDistance**: { $type: \"com.linkedin.voyager.common.MemberDistance\" ; value: string  }

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[memberDistance](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#memberdistance)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L10)*

#### Type declaration:

Name | Type |
------ | ------ |
`$type` | \"com.linkedin.voyager.common.MemberDistance\" |
`value` | string |

___

### nameMatch

•  **nameMatch**: boolean

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[nameMatch](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#namematch)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:14](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L14)*

___

### navigationUrl

•  **navigationUrl**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[navigationUrl](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#navigationurl)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:15](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L15)*

___

### profile

•  **profile**: [MiniProfile](_src_entities_mini_profile_entity_.miniprofile.md)

*Defined in [src/entities/people-search-hit.entity.ts:5](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/people-search-hit.entity.ts#L5)*

___

### publicIdentifier

•  **publicIdentifier**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[publicIdentifier](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#publicidentifier)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:16](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L16)*

___

### secondaryTitle

•  **secondaryTitle**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[secondaryTitle](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#secondarytitle)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L17)*

___

### socialProofText

•  **socialProofText**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[socialProofText](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#socialprooftext)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L18)*

___

### subline

•  **subline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[subline](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#subline)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L19)*

___

### targetUrn

•  **targetUrn**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[targetUrn](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#targeturn)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L20)*

___

### title

•  **title**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[title](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#title)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:21](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L21)*

___

### trackingId

•  **trackingId**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[trackingId](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#trackingid)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L22)*

___

### trackingUrn

•  **trackingUrn**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[trackingUrn](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#trackingurn)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:23](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L23)*

___

### type

•  **type**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[type](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#type)*

*Defined in [src/entities/linkedin-search-hit.entity.ts:24](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L24)*
