**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/profile.repository"](../modules/_src_repositories_profile_repository_.md) / ProfileRepository

# Class: ProfileRepository

## Hierarchy

* **ProfileRepository**

## Index

### Constructors

* [constructor](_src_repositories_profile_repository_.profilerepository.md#constructor)

### Methods

* [getContactInfo](_src_repositories_profile_repository_.profilerepository.md#getcontactinfo)
* [getOwnProfile](_src_repositories_profile_repository_.profilerepository.md#getownprofile)
* [getProfile](_src_repositories_profile_repository_.profilerepository.md#getprofile)

## Constructors

### constructor

\+ **new ProfileRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [ProfileRepository](_src_repositories_profile_repository_.profilerepository.md)

*Defined in [src/repositories/profile.repository.ts:35](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/repositories/profile.repository.ts#L35)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [ProfileRepository](_src_repositories_profile_repository_.profilerepository.md)

## Methods

### getContactInfo

▸ **getContactInfo**(`__namedParameters`: { publicIdentifier: string  }): Promise<[LinkedinContactInfo](../interfaces/_src_entities_linkedin_contact_info_response_entity_.linkedincontactinfo.md)\>

*Defined in [src/repositories/profile.repository.ts:75](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/repositories/profile.repository.ts#L75)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { publicIdentifier: string  } |

**Returns:** Promise<[LinkedinContactInfo](../interfaces/_src_entities_linkedin_contact_info_response_entity_.linkedincontactinfo.md)\>

___

### getOwnProfile

▸ **getOwnProfile**(): Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md) \| null\>

*Defined in [src/repositories/profile.repository.ts:63](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/repositories/profile.repository.ts#L63)*

**Returns:** Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md) \| null\>

___

### getProfile

▸ **getProfile**(`__namedParameters`: { publicIdentifier: string  }): Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md)\>

*Defined in [src/repositories/profile.repository.ts:41](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/repositories/profile.repository.ts#L41)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { publicIdentifier: string  } |

**Returns:** Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md)\>
