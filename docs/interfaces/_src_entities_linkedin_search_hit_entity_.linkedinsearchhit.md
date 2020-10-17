**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/linkedin-search-hit.entity"](../modules/_src_entities_linkedin_search_hit_entity_.md) / LinkedInSearchHit

# Interface: LinkedInSearchHit

## Hierarchy

* **LinkedInSearchHit**

  ↳ [CompanySearchHit](_src_entities_company_search_hit_entity_.companysearchhit.md)

  ↳ [PeopleSearchHit](_src_entities_people_search_hit_entity_.peoplesearchhit.md)

## Index

### Properties

* [$type](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#$type)
* [*badges](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#*badges)
* [headless](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#headless)
* [headline](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#headline)
* [image](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#image)
* [memberDistance](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#memberdistance)
* [nameMatch](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#namematch)
* [navigationUrl](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#navigationurl)
* [publicIdentifier](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#publicidentifier)
* [secondaryTitle](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#secondarytitle)
* [socialProofText](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#socialprooftext)
* [subline](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#subline)
* [targetUrn](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#targeturn)
* [title](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#title)
* [trackingId](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#trackingid)
* [trackingUrn](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#trackingurn)
* [type](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#type)

## Properties

### $type

•  **$type**: \"com.linkedin.voyager.search.SearchHitV2\"

*Defined in [src/entities/linkedin-search-hit.entity.ts:5](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L5)*

___

### *badges

•  ***badges**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L6)*

___

### headless

•  **headless**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L7)*

___

### headline

•  **headline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Defined in [src/entities/linkedin-search-hit.entity.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L8)*

___

### image

•  **image**: [LinkedInImageViewModel](_src_entities_linkedin_image_view_model_entity_.linkedinimageviewmodel.md)

*Defined in [src/entities/linkedin-search-hit.entity.ts:9](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L9)*

___

### memberDistance

•  **memberDistance**: { $type: \"com.linkedin.voyager.common.MemberDistance\" ; value: string  }

*Defined in [src/entities/linkedin-search-hit.entity.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L10)*

#### Type declaration:

Name | Type |
------ | ------ |
`$type` | \"com.linkedin.voyager.common.MemberDistance\" |
`value` | string |

___

### nameMatch

•  **nameMatch**: boolean

*Defined in [src/entities/linkedin-search-hit.entity.ts:14](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L14)*

___

### navigationUrl

•  **navigationUrl**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:15](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L15)*

___

### publicIdentifier

•  **publicIdentifier**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:16](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L16)*

___

### secondaryTitle

•  **secondaryTitle**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Defined in [src/entities/linkedin-search-hit.entity.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L17)*

___

### socialProofText

•  **socialProofText**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L18)*

___

### subline

•  **subline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Defined in [src/entities/linkedin-search-hit.entity.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L19)*

___

### targetUrn

•  **targetUrn**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L20)*

___

### title

•  **title**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

*Defined in [src/entities/linkedin-search-hit.entity.ts:21](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L21)*

___

### trackingId

•  **trackingId**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L22)*

___

### trackingUrn

•  **trackingUrn**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:23](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L23)*

___

### type

•  **type**: string

*Defined in [src/entities/linkedin-search-hit.entity.ts:24](https://github.com/eilonmore/linkedin-private-api/blob/a50722e/src/entities/linkedin-search-hit.entity.ts#L24)*
