**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/job-search.scroller"](../modules/_src_scrollers_job_search_scroller_.md) / JobSearchScroller

# Class: JobSearchScroller

## Hierarchy

- [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)\>

  ↳ **JobSearchScroller**

## Index

### Constructors

- [constructor](_src_scrollers_job_search_scroller_.jobsearchscroller.md#constructor)

### Properties

- [hitEndOfResults](_src_scrollers_job_search_scroller_.jobsearchscroller.md#hitendofresults)
- [limit](_src_scrollers_job_search_scroller_.jobsearchscroller.md#limit)
- [scrollNextCounter](_src_scrollers_job_search_scroller_.jobsearchscroller.md#scrollnextcounter)
- [skip](_src_scrollers_job_search_scroller_.jobsearchscroller.md#skip)

### Methods

- [fetch](_src_scrollers_job_search_scroller_.jobsearchscroller.md#fetch)
- [restart](_src_scrollers_job_search_scroller_.jobsearchscroller.md#restart)
- [scrollBack](_src_scrollers_job_search_scroller_.jobsearchscroller.md#scrollback)
- [scrollNext](_src_scrollers_job_search_scroller_.jobsearchscroller.md#scrollnext)

## Constructors

### constructor

\+ **new JobSearchScroller**(`__namedParameters`: { fetchJobs: FetchJobs ; filters: undefined \| JobSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [JobSearchScroller](_src_scrollers_job_search_scroller_.jobsearchscroller.md)

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)_

_Defined in [src/scrollers/job-search.scroller.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/job-search.scroller.ts#L22)_

#### Parameters:

| Name                | Type                                                                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters` | { fetchJobs: FetchJobs ; filters: undefined \| JobSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } |

**Returns:** [JobSearchScroller](_src_scrollers_job_search_scroller_.jobsearchscroller.md)

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

▸ **fetch**(): Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)_

_Defined in [src/scrollers/job-search.scroller.ts:44](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/job-search.scroller.ts#L44)_

**Returns:** Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

---

### restart

▸ **restart**(): void

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)_

_Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L55)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)_

_Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L36)_

**Returns:** Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)_

_Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L19)_

**Returns:** Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>
