**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/linkedin-collection-response.entity"](../modules/_src_entities_linkedin_collection_response_entity_.md) / LinkedInCollectionResponse

# Interface: LinkedInCollectionResponse<T, I, M\>

## Type parameters

| Name | Default   |
| ---- | --------- |
| `T`  | -         |
| `I`  | -         |
| `M`  | undefined |

## Hierarchy

- **LinkedInCollectionResponse**

## Index

### Properties

- [data](_src_entities_linkedin_collection_response_entity_.linkedincollectionresponse.md#data)
- [included](_src_entities_linkedin_collection_response_entity_.linkedincollectionresponse.md#included)

## Properties

### data

• **data**: { $type: \"com.linkedin.restli.common.CollectionResponse\" ; elements: T[] ; entityUrn: string ; metadata?: M ; paging: Paging }

_Defined in [src/entities/linkedin-collection-response.entity.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-collection-response.entity.ts#L8)_

#### Type declaration:

| Name        | Type                                              |
| ----------- | ------------------------------------------------- |
| `$type`     | \"com.linkedin.restli.common.CollectionResponse\" |
| `elements`  | T[]                                               |
| `entityUrn` | string                                            |
| `metadata?` | M                                                 |
| `paging`    | Paging                                            |

---

### included

• **included**: I[]

_Defined in [src/entities/linkedin-collection-response.entity.ts:15](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/entities/linkedin-collection-response.entity.ts#L15)_
