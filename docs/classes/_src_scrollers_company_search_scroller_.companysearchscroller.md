**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/company-search.scroller"](../modules/_src_scrollers_company_search_scroller_.md) / CompanySearchScroller

# Class: CompanySearchScroller

## Hierarchy

- [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)\>

  ↳ **CompanySearchScroller**

## Index

### Constructors

- [constructor](_src_scrollers_company_search_scroller_.companysearchscroller.md#constructor)

### Properties

- [hitEndOfResults](_src_scrollers_company_search_scroller_.companysearchscroller.md#hitendofresults)
- [limit](_src_scrollers_company_search_scroller_.companysearchscroller.md#limit)
- [scrollNextCounter](_src_scrollers_company_search_scroller_.companysearchscroller.md#scrollnextcounter)
- [skip](_src_scrollers_company_search_scroller_.companysearchscroller.md#skip)

### Methods

- [fetch](_src_scrollers_company_search_scroller_.companysearchscroller.md#fetch)
- [restart](_src_scrollers_company_search_scroller_.companysearchscroller.md#restart)
- [scrollBack](_src_scrollers_company_search_scroller_.companysearchscroller.md#scrollback)
- [scrollNext](_src_scrollers_company_search_scroller_.companysearchscroller.md#scrollnext)

## Constructors

### constructor

\+ **new CompanySearchScroller**(`__namedParameters`: { fetchCompanies: FetchCompanies ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)_

_Defined in [src/scrollers/company-search.scroller.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/company-search.scroller.ts#L17)_

#### Parameters:

| Name                | Type                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| `__namedParameters` | { fetchCompanies: FetchCompanies ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } |

**Returns:** [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

## Properties

### hitEndOfResults

• **hitEndOfResults**: boolean = false

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[hitEndOfResults](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#hitendofresults)_

_Defined in [src/scrollers/skip-limit-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L10)_

---

### limit

• **limit**: number

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[limit](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#limit)_

_Defined in [src/scrollers/skip-limit-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L4)_

---

### scrollNextCounter

• **scrollNextCounter**: number = 0

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNextCounter](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnextcounter)_

_Defined in [src/scrollers/skip-limit-scroller.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L8)_

---

### skip

• **skip**: number

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[skip](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#skip)_

_Defined in [src/scrollers/skip-limit-scroller.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L6)_

## Methods

### fetch

▸ **fetch**(): Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)_

_Defined in [src/scrollers/company-search.scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/company-search.scroller.ts#L36)_

**Returns:** Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

---

### restart

▸ **restart**(): void

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)_

_Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L55)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)_

_Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L36)_

**Returns:** Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)_

_Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L19)_

**Returns:** Promise<[CompanySearchHit](../interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)[]\>
