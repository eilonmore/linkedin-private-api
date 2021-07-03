**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/profile.repository"](../modules/_src_repositories_profile_repository_.md) / ProfileRepository

# Class: ProfileRepository

## Hierarchy

- **ProfileRepository**

## Index

### Constructors

- [constructor](_src_repositories_profile_repository_.profilerepository.md#constructor)

### Methods

- [getOwnProfile](_src_repositories_profile_repository_.profilerepository.md#getownprofile)
- [getProfile](_src_repositories_profile_repository_.profilerepository.md#getprofile)

## Constructors

### constructor

\+ **new ProfileRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md) }): [ProfileRepository](_src_repositories_profile_repository_.profilerepository.md)

_Defined in [src/repositories/profile.repository.ts:34](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/profile.repository.ts#L34)_

#### Parameters:

| Name                | Type                                              |
| ------------------- | ------------------------------------------------- |
| `__namedParameters` | { client: [Client](_src_core_client_.client.md) } |

**Returns:** [ProfileRepository](_src_repositories_profile_repository_.profilerepository.md)

## Methods

### getOwnProfile

▸ **getOwnProfile**(): Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md) \| null\>

_Defined in [src/repositories/profile.repository.ts:56](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/profile.repository.ts#L56)_

**Returns:** Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md) \| null\>

---

### getProfile

▸ **getProfile**(`__namedParameters`: { publicIdentifier: string }): Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md)\>

_Defined in [src/repositories/profile.repository.ts:40](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/profile.repository.ts#L40)_

#### Parameters:

| Name                | Type                         |
| ------------------- | ---------------------------- |
| `__namedParameters` | { publicIdentifier: string } |

**Returns:** Promise<[Profile](../interfaces/_src_entities_profile_entity_.profile.md)\>
