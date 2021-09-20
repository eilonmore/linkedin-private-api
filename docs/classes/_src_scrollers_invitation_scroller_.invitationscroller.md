**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/invitation.scroller"](../modules/_src_scrollers_invitation_scroller_.md) / InvitationScroller

# Class: InvitationScroller

## Hierarchy

- [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)\>

  ↳ **InvitationScroller**

## Index

### Constructors

- [constructor](_src_scrollers_invitation_scroller_.invitationscroller.md#constructor)

### Properties

- [hitEndOfResults](_src_scrollers_invitation_scroller_.invitationscroller.md#hitendofresults)
- [limit](_src_scrollers_invitation_scroller_.invitationscroller.md#limit)
- [scrollNextCounter](_src_scrollers_invitation_scroller_.invitationscroller.md#scrollnextcounter)
- [skip](_src_scrollers_invitation_scroller_.invitationscroller.md#skip)

### Methods

- [fetch](_src_scrollers_invitation_scroller_.invitationscroller.md#fetch)
- [restart](_src_scrollers_invitation_scroller_.invitationscroller.md#restart)
- [scrollBack](_src_scrollers_invitation_scroller_.invitationscroller.md#scrollback)
- [scrollNext](_src_scrollers_invitation_scroller_.invitationscroller.md#scrollnext)

## Constructors

### constructor

\+ **new InvitationScroller**(`__namedParameters`: { fetchInvitations: FetchInvitations ; limit: number = 100; skip: number = 0 }): [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)_

_Defined in [src/scrollers/invitation.scroller.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/invitation.scroller.ts#L7)_

#### Parameters:

| Name                | Type                                                                           |
| ------------------- | ------------------------------------------------------------------------------ |
| `__namedParameters` | { fetchInvitations: FetchInvitations ; limit: number = 100; skip: number = 0 } |

**Returns:** [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

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

▸ **fetch**(): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

_Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)_

_Defined in [src/scrollers/invitation.scroller.ts:15](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/invitation.scroller.ts#L15)_

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

---

### restart

▸ **restart**(): void

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)_

_Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L55)_

**Returns:** void

---

### scrollBack

▸ **scrollBack**(): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)_

_Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L36)_

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

---

### scrollNext

▸ **scrollNext**(): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

_Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)_

_Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/scrollers/skip-limit-scroller.ts#L19)_

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>
