**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/search.repository"](../modules/_src_repositories_search_repository_.md) / SearchRepository

# Class: SearchRepository

## Hierarchy

- **SearchRepository**

## Index

### Constructors

- [constructor](_src_repositories_search_repository_.searchrepository.md#constructor)

### Properties

- [client](_src_repositories_search_repository_.searchrepository.md#client)

### Methods

- [searchCompanies](_src_repositories_search_repository_.searchrepository.md#searchcompanies)
- [searchConnectionsOf](_src_repositories_search_repository_.searchrepository.md#searchconnectionsof)
- [searchOwnConnections](_src_repositories_search_repository_.searchrepository.md#searchownconnections)
- [searchPeople](_src_repositories_search_repository_.searchrepository.md#searchpeople)

## Constructors

### constructor

\+ **new SearchRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md) }): [SearchRepository](_src_repositories_search_repository_.searchrepository.md)

_Defined in [src/repositories/search.repository.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/search.repository.ts#L19)_

#### Parameters:

| Name                | Type                                              |
| ------------------- | ------------------------------------------------- |
| `__namedParameters` | { client: [Client](_src_core_client_.client.md) } |

**Returns:** [SearchRepository](_src_repositories_search_repository_.searchrepository.md)

## Properties

### client

• **client**: [Client](_src_core_client_.client.md)

_Defined in [src/repositories/search.repository.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/search.repository.ts#L19)_

## Methods

### searchCompanies

▸ **searchCompanies**(`__namedParameters?`: { keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

_Defined in [src/repositories/search.repository.ts:45](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/search.repository.ts#L45)_

#### Parameters:

| Name                | Type                                                                     | Default value |
| ------------------- | ------------------------------------------------------------------------ | ------------- |
| `__namedParameters` | { keywords: undefined \| string ; limit: number = 10; skip: number = 0 } | {}            |

**Returns:** [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

---

### searchConnectionsOf

▸ **searchConnectionsOf**(`__namedParameters`: { filters: Omit<PeopleSearchFilters, \"network\" \| \"connectionOf\"\> ; keywords: undefined \| string ; limit: number = 10; profileId: string ; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

_Defined in [src/repositories/search.repository.ts:82](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/search.repository.ts#L82)_

#### Parameters:

| Name                | Type                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters` | { filters: Omit<PeopleSearchFilters, \"network\" \| \"connectionOf\"\> ; keywords: undefined \| string ; limit: number = 10; profileId: string ; skip: number = 0 } |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

---

### searchOwnConnections

▸ **searchOwnConnections**(`__namedParameters?`: { filters: Omit<PeopleSearchFilters, \"network\"\> ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

_Defined in [src/repositories/search.repository.ts:62](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/search.repository.ts#L62)_

#### Parameters:

| Name                | Type                                                                                                                        | Default value |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `__namedParameters` | { filters: Omit<PeopleSearchFilters, \"network\"\> ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } | {}            |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

---

### searchPeople

▸ **searchPeople**(`__namedParameters?`: { filters: PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

_Defined in [src/repositories/search.repository.ts:25](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/repositories/search.repository.ts#L25)_

#### Parameters:

| Name                | Type                                                                                                    | Default value |
| ------------------- | ------------------------------------------------------------------------------------------------------- | ------------- |
| `__namedParameters` | { filters: PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } | {}            |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)
