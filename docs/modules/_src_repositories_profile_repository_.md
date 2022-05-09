**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / "src/repositories/profile.repository"

# Module: "src/repositories/profile.repository"

## Index

### Classes

* [ProfileRepository](../classes/_src_repositories_profile_repository_.profilerepository.md)

### Functions

* [getProfilesFromResponse](_src_repositories_profile_repository_.md#getprofilesfromresponse)

## Functions

### getProfilesFromResponse

▸ `Const`**getProfilesFromResponse**<T\>(`response`: T): Record<[ProfileId](_src_entities_mini_profile_entity_.md#profileid), [MiniProfile](../interfaces/_src_entities_mini_profile_entity_.miniprofile.md)\>

*Defined in [src/repositories/profile.repository.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/profile.repository.ts#L20)*

#### Type parameters:

Name | Type |
------ | ------ |
`T` | { included: ([LinkedInMiniProfile](../interfaces/_src_entities_linkedin_mini_profile_entity_.linkedinminiprofile.md) \| { $type: string  })[]  } |

#### Parameters:

Name | Type |
------ | ------ |
`response` | T |

**Returns:** Record<[ProfileId](_src_entities_mini_profile_entity_.md#profileid), [MiniProfile](../interfaces/_src_entities_mini_profile_entity_.miniprofile.md)\>
