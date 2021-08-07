**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/linkedin-base-company"](../modules/_src_entities_linkedin_base_company_.md) / LinkedInBaseCompany

# Interface: LinkedInBaseCompany

## Hierarchy

- **LinkedInBaseCompany**

## Index

### Properties

- [$anti_abuse_annotations](_src_entities_linkedin_base_company_.linkedinbasecompany.md#$anti_abuse_annotations)
- [$recipeTypes](_src_entities_linkedin_base_company_.linkedinbasecompany.md#$recipetypes)
- [$type](_src_entities_linkedin_base_company_.linkedinbasecompany.md#$type)
- [entityUrn](_src_entities_linkedin_base_company_.linkedinbasecompany.md#entityurn)
- [logo](_src_entities_linkedin_base_company_.linkedinbasecompany.md#logo)
- [name](_src_entities_linkedin_base_company_.linkedinbasecompany.md#name)

## Properties

### $anti_abuse_annotations

• **$anti_abuse_annotations**: { attributeId: number ; entityId: number }[]

_Defined in [src/entities/linkedin-base-company.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-base-company.ts#L7)_

---

### $recipeTypes

• **$recipeTypes**: string[]

_Defined in [src/entities/linkedin-base-company.ts:11](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-base-company.ts#L11)_

---

### $type

• **$type**: _typeof_ [BASE_COMPANY_TYPE](../modules/_src_entities_linkedin_base_company_.md#base_company_type)

_Defined in [src/entities/linkedin-base-company.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-base-company.ts#L6)_

---

### entityUrn

• **entityUrn**: string

_Defined in [src/entities/linkedin-base-company.ts:12](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-base-company.ts#L12)_

---

### logo

• **logo**: { $type: \"com.linkedin.voyager.organization.CompanyLogoImage\" ; image: [LinkedInVectorImage](_src_entities_linkedin_vector_image_entity_.linkedinvectorimage.md) ; type: \"SQUARE_LOGO\" }

_Defined in [src/entities/linkedin-base-company.ts:13](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-base-company.ts#L13)_

#### Type declaration:

| Name    | Type                                                                                      |
| ------- | ----------------------------------------------------------------------------------------- |
| `$type` | \"com.linkedin.voyager.organization.CompanyLogoImage\"                                    |
| `image` | [LinkedInVectorImage](_src_entities_linkedin_vector_image_entity_.linkedinvectorimage.md) |
| `type`  | \"SQUARE_LOGO\"                                                                           |

---

### name

• **name**: string

_Defined in [src/entities/linkedin-base-company.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-base-company.ts#L18)_
