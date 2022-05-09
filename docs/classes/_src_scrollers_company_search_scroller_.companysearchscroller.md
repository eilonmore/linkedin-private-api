**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/company-search.scroller"](../modules/_src_scrollers_company_search_scroller_.md) / CompanySearchScroller

# Class: CompanySearchScroller

## Hierarchy

* [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)\>

  ↳ **CompanySearchScroller**

## Index

### Constructors

* [constructor](_src_scrollers_company_search_scroller_.companysearchscroller.md#constructor)

### Properties

* [hitEndOfResults](_src_scrollers_company_search_scroller_.companysearchscroller.md#hitendofresults)
* [limit](_src_scrollers_company_search_scroller_.companysearchscroller.md#limit)
* [scrollNextCounter](_src_scrollers_company_search_scroller_.companysearchscroller.md#scrollnextcounter)
* [skip](_src_scrollers_company_search_scroller_.companysearchscroller.md#skip)

### Methods

* [fetch](_src_scrollers_company_search_scroller_.companysearchscroller.md#fetch)
* [restart](_src_scrollers_company_search_scroller_.companysearchscroller.md#restart)
* [scrollBack](_src_scrollers_company_search_scroller_.companysearchscroller.md#scrollback)
* [scrollNext](_src_scrollers_company_search_scroller_.companysearchscroller.md#scrollnext)

## Constructors

### constructor

\+ **new CompanySearchScroller**(`__namedParameters`: { fetchCompanies: FetchCompanies ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)*

*Defined in [src/scrollers/company-search.scroller.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/company-search.scroller.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { fetchCompanies: FetchCompanies ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } |

**Returns:** [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

## Properties

### hitEndOfResults

•  **hitEndOfResults**: boolean = false

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[hitEndOfResults](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#hitendofresults)*

*Defined in [src/scrollers/skip-limit-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L10)*

___

### limit

•  **limit**: number

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[limit](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#limit)*

*Defined in [src/scrollers/skip-limit-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L4)*

___

### scrollNextCounter

•  **scrollNextCounter**: number = 0

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNextCounter](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnextcounter)*

*Defined in [src/scrollers/skip-limit-scroller.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L8)*

___

### skip

•  **skip**: number

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[skip](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#skip)*

*Defined in [src/scrollers/skip-limit-scroller.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L6)*

## Methods

### fetch

▸ **fetch**(): Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)*

*Defined in [src/scrollers/company-search.scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/company-search.scroller.ts#L36)*

**Returns:** Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

___

### restart

▸ **restart**(): void

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)*

*Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L55)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)*

*Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L36)*

**Returns:** Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)*

*Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L19)*

**Returns:** Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>
