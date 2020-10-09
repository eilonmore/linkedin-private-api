**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/skip-limit-scroller"](../modules/_src_scrollers_skip_limit_scroller_.md) / SkipLimitScroller

# Class: SkipLimitScroller\<**T**>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **SkipLimitScroller**

  ↳ [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

  ↳ [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

  ↳ [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

## Index

### Constructors

* [constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)

### Properties

* [hitEndOfResults](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#hitendofresults)
* [limit](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#limit)
* [scrollNextCounter](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnextcounter)
* [skip](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#skip)

### Methods

* [fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)
* [restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)
* [scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)
* [scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)

## Constructors

### constructor

\+ **new SkipLimitScroller**(`__namedParameters`: { limit: number ; skip: number  }): [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)

*Defined in src/scrollers/skip-limit-scroller.ts:10*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { limit: number ; skip: number  } |

**Returns:** [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)

## Properties

### hitEndOfResults

•  **hitEndOfResults**: boolean = false

*Defined in src/scrollers/skip-limit-scroller.ts:10*

___

### limit

•  **limit**: number

*Defined in src/scrollers/skip-limit-scroller.ts:4*

___

### scrollNextCounter

•  **scrollNextCounter**: number = 0

*Defined in src/scrollers/skip-limit-scroller.ts:8*

___

### skip

•  **skip**: number

*Defined in src/scrollers/skip-limit-scroller.ts:6*

## Methods

### fetch

▸ `Abstract`**fetch**(): Promise\<T[]>

*Defined in src/scrollers/skip-limit-scroller.ts:17*

**Returns:** Promise\<T[]>

___

### restart

▸ **restart**(): void

*Defined in src/scrollers/skip-limit-scroller.ts:55*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise\<T[]>

*Defined in src/scrollers/skip-limit-scroller.ts:36*

**Returns:** Promise\<T[]>

___

### scrollNext

▸ **scrollNext**(): Promise\<T[]>

*Defined in src/scrollers/skip-limit-scroller.ts:19*

**Returns:** Promise\<T[]>
