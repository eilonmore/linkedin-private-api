**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/people-search.scroller"](../modules/_src_scrollers_people_search_scroller_.md) / PeopleSearchScroller

# Class: PeopleSearchScroller

## Hierarchy

* [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)\>

  ↳ **PeopleSearchScroller**

## Index

### Constructors

* [constructor](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#constructor)

### Properties

* [hitEndOfResults](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#hitendofresults)
* [limit](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#limit)
* [scrollNextCounter](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#scrollnextcounter)
* [skip](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#skip)

### Methods

* [fetch](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#fetch)
* [restart](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#restart)
* [scrollBack](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#scrollback)
* [scrollNext](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#scrollnext)

## Constructors

### constructor

\+ **new PeopleSearchScroller**(`__namedParameters`: { fetchPeople: FetchPeople ; filters: undefined \| PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)*

*Defined in [src/scrollers/people-search.scroller.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/people-search.scroller.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { fetchPeople: FetchPeople ; filters: undefined \| PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

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

▸ **fetch**(): Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)*

*Defined in [src/scrollers/people-search.scroller.ts:44](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/people-search.scroller.ts#L44)*

**Returns:** Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

___

### restart

▸ **restart**(): void

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)*

*Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L55)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)*

*Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L36)*

**Returns:** Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)*

*Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L19)*

**Returns:** Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>
