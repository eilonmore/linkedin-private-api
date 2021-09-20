**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/company-search-hit.entity"](../modules/_src_entities_company_search_hit_entity_.md) / CompanySearchHit

# Interface: CompanySearchHit

## Hierarchy

- [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md)

  ↳ **CompanySearchHit**

## Index

### Properties

- [$type](_src_entities_company_search_hit_entity_.companysearchhit.md#$type)
- [\*badges](_src_entities_company_search_hit_entity_.companysearchhit.md#*badges)
- [company](_src_entities_company_search_hit_entity_.companysearchhit.md#company)
- [headless](_src_entities_company_search_hit_entity_.companysearchhit.md#headless)
- [headline](_src_entities_company_search_hit_entity_.companysearchhit.md#headline)
- [image](_src_entities_company_search_hit_entity_.companysearchhit.md#image)
- [memberDistance](_src_entities_company_search_hit_entity_.companysearchhit.md#memberdistance)
- [nameMatch](_src_entities_company_search_hit_entity_.companysearchhit.md#namematch)
- [navigationUrl](_src_entities_company_search_hit_entity_.companysearchhit.md#navigationurl)
- [publicIdentifier](_src_entities_company_search_hit_entity_.companysearchhit.md#publicidentifier)
- [secondaryTitle](_src_entities_company_search_hit_entity_.companysearchhit.md#secondarytitle)
- [socialProofText](_src_entities_company_search_hit_entity_.companysearchhit.md#socialprooftext)
- [subline](_src_entities_company_search_hit_entity_.companysearchhit.md#subline)
- [targetUrn](_src_entities_company_search_hit_entity_.companysearchhit.md#targeturn)
- [title](_src_entities_company_search_hit_entity_.companysearchhit.md#title)
- [trackingId](_src_entities_company_search_hit_entity_.companysearchhit.md#trackingid)
- [trackingUrn](_src_entities_company_search_hit_entity_.companysearchhit.md#trackingurn)
- [type](_src_entities_company_search_hit_entity_.companysearchhit.md#type)

## Properties

### $type

• **$type**: \"com.linkedin.voyager.search.SearchHitV2\"

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[$type](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#$type)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:5](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L5)_

---

### \*badges

• **\*badges**: string

*Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[*badges](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#_badges)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L6)_

---

### company

• **company**: [MiniCompany](_src_entities_mini_company_entity_.minicompany.md)

_Defined in [src/entities/company-search-hit.entity.ts:5](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/company-search-hit.entity.ts#L5)_

---

### headless

• **headless**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[headless](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#headless)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L7)_

---

### headline

• **headline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[headline](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#headline)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L8)_

---

### image

• **image**: [LinkedInImageViewModel](_src_entities_linkedin_image_view_model_entity_.linkedinimageviewmodel.md)

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[image](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#image)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:9](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L9)_

---

### memberDistance

• **memberDistance**: { $type: \"com.linkedin.voyager.common.MemberDistance\" ; value: string }

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[memberDistance](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#memberdistance)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L10)_

#### Type declaration:

| Name    | Type                                           |
| ------- | ---------------------------------------------- |
| `$type` | \"com.linkedin.voyager.common.MemberDistance\" |
| `value` | string                                         |

---

### nameMatch

• **nameMatch**: boolean

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[nameMatch](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#namematch)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:14](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L14)_

---

### navigationUrl

• **navigationUrl**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[navigationUrl](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#navigationurl)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:15](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L15)_

---

### publicIdentifier

• **publicIdentifier**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[publicIdentifier](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#publicidentifier)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:16](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L16)_

---

### secondaryTitle

• **secondaryTitle**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[secondaryTitle](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#secondarytitle)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L17)_

---

### socialProofText

• **socialProofText**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[socialProofText](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#socialprooftext)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L18)_

---

### subline

• **subline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[subline](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#subline)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L19)_

---

### targetUrn

• **targetUrn**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[targetUrn](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#targeturn)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L20)_

---

### title

• **title**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[title](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#title)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:21](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L21)_

---

### trackingId

• **trackingId**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[trackingId](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#trackingid)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L22)_

---

### trackingUrn

• **trackingUrn**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[trackingUrn](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#trackingurn)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:23](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L23)_

---

### type

• **type**: string

_Inherited from [LinkedInSearchHitV2](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md).[type](_src_entities_linkedin_search_hit_v2_entity_.linkedinsearchhitv2.md#type)_

_Defined in [src/entities/linkedin-search-hit-v2.entity.ts:24](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-search-hit-v2.entity.ts#L24)_
