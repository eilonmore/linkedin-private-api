**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/linkedin-base-company"](../modules/_src_entities_linkedin_base_company_.md) / LinkedInBaseCompany

# Interface: LinkedInBaseCompany

## Hierarchy

* **LinkedInBaseCompany**

## Index

### Properties

* [$anti\_abuse\_annotations](_src_entities_linkedin_base_company_.linkedinbasecompany.md#$anti_abuse_annotations)
* [$recipeTypes](_src_entities_linkedin_base_company_.linkedinbasecompany.md#$recipetypes)
* [$type](_src_entities_linkedin_base_company_.linkedinbasecompany.md#$type)
* [entityUrn](_src_entities_linkedin_base_company_.linkedinbasecompany.md#entityurn)
* [logo](_src_entities_linkedin_base_company_.linkedinbasecompany.md#logo)
* [name](_src_entities_linkedin_base_company_.linkedinbasecompany.md#name)

## Properties

### $anti\_abuse\_annotations

•  **$anti\_abuse\_annotations**: { attributeId: number ; entityId: number  }[]

*Defined in [src/entities/linkedin-base-company.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/entities/linkedin-base-company.ts#L7)*

___

### $recipeTypes

•  **$recipeTypes**: string[]

*Defined in [src/entities/linkedin-base-company.ts:11](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/entities/linkedin-base-company.ts#L11)*

___

### $type

•  **$type**: *typeof* [BASE\_COMPANY\_TYPE](../modules/_src_entities_linkedin_base_company_.md#base_company_type)

*Defined in [src/entities/linkedin-base-company.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/entities/linkedin-base-company.ts#L6)*

___

### entityUrn

•  **entityUrn**: string

*Defined in [src/entities/linkedin-base-company.ts:12](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/entities/linkedin-base-company.ts#L12)*

___

### logo

•  **logo**: { $type: \"com.linkedin.voyager.organization.CompanyLogoImage\" ; image: [LinkedInVectorImage](_src_entities_linkedin_vector_image_entity_.linkedinvectorimage.md) ; type: \"SQUARE\_LOGO\"  }

*Defined in [src/entities/linkedin-base-company.ts:13](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/entities/linkedin-base-company.ts#L13)*

#### Type declaration:

Name | Type |
------ | ------ |
`$type` | \"com.linkedin.voyager.organization.CompanyLogoImage\" |
`image` | [LinkedInVectorImage](_src_entities_linkedin_vector_image_entity_.linkedinvectorimage.md) |
`type` | \"SQUARE\_LOGO\" |

___

### name

•  **name**: string

*Defined in [src/entities/linkedin-base-company.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/entities/linkedin-base-company.ts#L18)*
