**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/linkedin-collection-response.entity"](../modules/_src_entities_linkedin_collection_response_entity_.md) / LinkedInCollectionResponse

# Interface: LinkedInCollectionResponse<T, I, M\>

## Type parameters

Name | Default |
------ | ------ |
`T` | - |
`I` | - |
`M` | undefined |

## Hierarchy

* **LinkedInCollectionResponse**

## Index

### Properties

* [data](_src_entities_linkedin_collection_response_entity_.linkedincollectionresponse.md#data)
* [included](_src_entities_linkedin_collection_response_entity_.linkedincollectionresponse.md#included)

## Properties

### data

•  **data**: { $type: \"com.linkedin.restli.common.CollectionResponse\" ; elements: T[] ; entityUrn: string ; metadata?: M ; paging: Paging  }

*Defined in [src/entities/linkedin-collection-response.entity.ts:8](https://github.com/cosiall/linkedin-private-api/blob/1436ab9/src/entities/linkedin-collection-response.entity.ts#L8)*

#### Type declaration:

Name | Type |
------ | ------ |
`$type` | \"com.linkedin.restli.common.CollectionResponse\" |
`elements` | T[] |
`entityUrn` | string |
`metadata?` | M |
`paging` | Paging |

___

### included

•  **included**: I[]

*Defined in [src/entities/linkedin-collection-response.entity.ts:15](https://github.com/cosiall/linkedin-private-api/blob/1436ab9/src/entities/linkedin-collection-response.entity.ts#L15)*
