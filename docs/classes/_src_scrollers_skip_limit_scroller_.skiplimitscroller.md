**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/skip-limit-scroller"](../modules/_src_scrollers_skip_limit_scroller_.md) / SkipLimitScroller

# Class: SkipLimitScroller<T\>

## Type parameters

| Name |
| ---- |
| `T`  |

## Hierarchy

- **SkipLimitScroller**

  ↳ [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

  ↳ [PeopleSearchScroller](_src_scrollers_people_search_scroller_.peoplesearchscroller.md)

  ↳ [CompanySearchScroller](_src_scrollers_company_search_scroller_.companysearchscroller.md)

## Index

### Constructors

- [constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)

### Properties

- [hitEndOfResults](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#hitendofresults)
- [limit](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#limit)
- [scrollNextCounter](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnextcounter)
- [skip](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#skip)

### Methods

- [fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)
- [restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)
- [scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)
- [scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)

## Constructors

### constructor

\+ **new SkipLimitScroller**(`__namedParameters`: { limit: number ; skip: number }): [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)

_Defined in [src/scrollers/skip-limit-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L10)_

#### Parameters:

| Name                | Type                             |
| ------------------- | -------------------------------- |
| `__namedParameters` | { limit: number ; skip: number } |

**Returns:** [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)

## Properties

### hitEndOfResults

• **hitEndOfResults**: boolean = false

_Defined in [src/scrollers/skip-limit-scroller.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L10)_

---

### limit

• **limit**: number

_Defined in [src/scrollers/skip-limit-scroller.ts:4](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L4)_

---

### scrollNextCounter

• **scrollNextCounter**: number = 0

_Defined in [src/scrollers/skip-limit-scroller.ts:8](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L8)_

---

### skip

• **skip**: number

_Defined in [src/scrollers/skip-limit-scroller.ts:6](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L6)_

## Methods

### fetch

▸ `Abstract`**fetch**(): Promise<T[]\>

_Defined in [src/scrollers/skip-limit-scroller.ts:17](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L17)_

**Returns:** Promise<T[]\>

---

### restart

▸ **restart**(): void

_Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L55)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<T[]\>

_Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L36)_

**Returns:** Promise<T[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<T[]\>

_Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/354b20a/src/scrollers/skip-limit-scroller.ts#L19)_

**Returns:** Promise<T[]\>
