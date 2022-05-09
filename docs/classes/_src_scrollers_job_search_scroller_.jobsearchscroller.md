**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/job-search.scroller"](../modules/_src_scrollers_job_search_scroller_.md) / JobSearchScroller

# Class: JobSearchScroller

## Hierarchy

* [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)\>

  ↳ **JobSearchScroller**

## Index

### Constructors

* [constructor](_src_scrollers_job_search_scroller_.jobsearchscroller.md#constructor)

### Properties

* [hitEndOfResults](_src_scrollers_job_search_scroller_.jobsearchscroller.md#hitendofresults)
* [limit](_src_scrollers_job_search_scroller_.jobsearchscroller.md#limit)
* [scrollNextCounter](_src_scrollers_job_search_scroller_.jobsearchscroller.md#scrollnextcounter)
* [skip](_src_scrollers_job_search_scroller_.jobsearchscroller.md#skip)

### Methods

* [fetch](_src_scrollers_job_search_scroller_.jobsearchscroller.md#fetch)
* [restart](_src_scrollers_job_search_scroller_.jobsearchscroller.md#restart)
* [scrollBack](_src_scrollers_job_search_scroller_.jobsearchscroller.md#scrollback)
* [scrollNext](_src_scrollers_job_search_scroller_.jobsearchscroller.md#scrollnext)

## Constructors

### constructor

\+ **new JobSearchScroller**(`__namedParameters`: { fetchJobs: FetchJobs ; filters: undefined \| JobSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 }): [JobSearchScroller](_src_scrollers_job_search_scroller_.jobsearchscroller.md)

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)*

*Defined in [src/scrollers/job-search.scroller.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/job-search.scroller.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { fetchJobs: FetchJobs ; filters: undefined \| JobSearchFilters ; keywords: undefined \| string ; limit: number = 10; skip: number = 0 } |

**Returns:** [JobSearchScroller](_src_scrollers_job_search_scroller_.jobsearchscroller.md)

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

▸ **fetch**(): Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)*

*Defined in [src/scrollers/job-search.scroller.ts:44](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/job-search.scroller.ts#L44)*

**Returns:** Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

___

### restart

▸ **restart**(): void

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)*

*Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L55)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)*

*Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L36)*

**Returns:** Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)*

*Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L19)*

**Returns:** Promise<[JobSearchHit](../modules/_src_entities_job_search_hit_entity_.md#jobsearchhit)[]\>
