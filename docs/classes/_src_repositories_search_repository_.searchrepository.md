**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/search.repository"](../modules/_src_repositories_search_repository_.md) / SearchRepository

# Class: SearchRepository

## Hierarchy

* **SearchRepository**

## Index

### Constructors

* [constructor](_src_repositories_search_repository_.searchrepository.md#constructor)

### Properties

* [client](_src_repositories_search_repository_.searchrepository.md#client)

### Methods

* [searchCompanies](_src_repositories_search_repository_.searchrepository.md#searchcompanies)
* [searchConnectionsOf](_src_repositories_search_repository_.searchrepository.md#searchconnectionsof)
* [searchOwnConnections](_src_repositories_search_repository_.searchrepository.md#searchownconnections)
* [searchPeople](_src_repositories_search_repository_.searchrepository.md#searchpeople)

## Constructors

### constructor

\+ **new SearchRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [SearchRepository](_src_repositories_search_repository_.searchrepository.md)

*Defined in src/repositories/search.repository.ts:18*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [SearchRepository](_src_repositories_search_repository_.searchrepository.md)

## Properties

### client

•  **client**: [Client](_src_core_client_.client.md)

*Defined in src/repositories/search.repository.ts:18*

## Methods

### searchCompanies

▸ **searchCompanies**(`__namedParameters`: { keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

*Defined in src/repositories/search.repository.ts:44*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { keywords: undefined \| string ; limit: number = 10; skip: number = 0 } | {} |

**Returns:** [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

___

### searchConnectionsOf

▸ **searchConnectionsOf**(`__namedParameters`: { filters: Pick\<PeopleSearchFilters, \"currentCompany\" \| \"pastCompany\" \| \"company\" \| \"geoUrn\" \| \"industry\" \| \"profileLanguage\" \| \"school\" \| \"contactInterest\" \| \"serviceCategory\" \| \"firstName\" \| \"lastName\" \| \"title\"> ; keywords: undefined \| string ; limit: number = 10; profileId: string ; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

*Defined in src/repositories/search.repository.ts:81*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { filters: Pick\<PeopleSearchFilters, \"currentCompany\" \| \"pastCompany\" \| \"company\" \| \"geoUrn\" \| \"industry\" \| \"profileLanguage\" \| \"school\" \| \"contactInterest\" \| \"serviceCategory\" \| \"firstName\" \| \"lastName\" \| \"title\"> ; keywords: undefined \| string ; limit: number = 10; profileId: string ; skip: number = 0 } |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

___

### searchOwnConnections

▸ **searchOwnConnections**(`__namedParameters`: { filters: Pick\<PeopleSearchFilters, \"currentCompany\" \| \"pastCompany\" \| \"company\" \| \"geoUrn\" \| \"industry\" \| \"profileLanguage\" \| \"school\" \| \"connectionOf\" \| \"contactInterest\" \| \"serviceCategory\" \| \"firstName\" \| \"lastName\" \| \"title\"> ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

*Defined in src/repositories/search.repository.ts:61*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { filters: Pick\<PeopleSearchFilters, \"currentCompany\" \| \"pastCompany\" \| \"company\" \| \"geoUrn\" \| \"industry\" \| \"profileLanguage\" \| \"school\" \| \"connectionOf\" \| \"contactInterest\" \| \"serviceCategory\" \| \"firstName\" \| \"lastName\" \| \"title\"> ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } | {} |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

___

### searchPeople

▸ **searchPeople**(`__namedParameters`: { filters: PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

*Defined in src/repositories/search.repository.ts:24*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { filters: PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } | {} |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)
