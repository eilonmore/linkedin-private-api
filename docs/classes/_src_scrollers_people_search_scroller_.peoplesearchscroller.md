**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/people-search.scroller"](../modules/_src_scrollers_people_search_scroller_.md) / PeopleSearchScroller

# Class: PeopleSearchScroller

## Hierarchy

- [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)\>

  ↳ **PeopleSearchScroller**

## Index

### Constructors

- [constructor](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#constructor)

### Properties

- [hitEndOfResults](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#hitendofresults)
- [limit](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#limit)
- [scrollNextCounter](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#scrollnextcounter)
- [skip](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#skip)

### Methods

- [fetch](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#fetch)
- [restart](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#restart)
- [scrollBack](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#scrollback)
- [scrollNext](_src_scrollers_people_search_scroller_.peoplesearchscroller.md#scrollnext)

## Constructors

### constructor

\+ **new PeopleSearchScroller**(`__namedParameters`: { fetchPeople: FetchPeople ; filters: undefined \| PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)_

_Defined in [src/scrollers/people-search.scroller.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/people-search.scroller.ts#L22)_

#### Parameters:

| Name                | Type                                                                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters` | { fetchPeople: FetchPeople ; filters: undefined \| PeopleSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } |

**Returns:** [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

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

▸ **fetch**(): Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)_

_Defined in [src/scrollers/people-search.scroller.ts:44](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/people-search.scroller.ts#L44)_

**Returns:** Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

---

### restart

▸ **restart**(): void

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)_

_Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L55)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)_

_Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L36)_

**Returns:** Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)_

_Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L19)_

**Returns:** Promise<[PeopleSearchHit](../interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)[]\>
