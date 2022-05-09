**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/invitation.scroller"](../modules/_src_scrollers_invitation_scroller_.md) / InvitationScroller

# Class: InvitationScroller

## Hierarchy

* [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)\>

  ↳ **InvitationScroller**

## Index

### Constructors

* [constructor](_src_scrollers_invitation_scroller_.invitationscroller.md#constructor)

### Properties

* [hitEndOfResults](_src_scrollers_invitation_scroller_.invitationscroller.md#hitendofresults)
* [limit](_src_scrollers_invitation_scroller_.invitationscroller.md#limit)
* [scrollNextCounter](_src_scrollers_invitation_scroller_.invitationscroller.md#scrollnextcounter)
* [skip](_src_scrollers_invitation_scroller_.invitationscroller.md#skip)

### Methods

* [fetch](_src_scrollers_invitation_scroller_.invitationscroller.md#fetch)
* [restart](_src_scrollers_invitation_scroller_.invitationscroller.md#restart)
* [scrollBack](_src_scrollers_invitation_scroller_.invitationscroller.md#scrollback)
* [scrollNext](_src_scrollers_invitation_scroller_.invitationscroller.md#scrollnext)

## Constructors

### constructor

\+ **new InvitationScroller**(`__namedParameters`: { fetchInvitations: FetchInvitations ; limit: number = 100; skip: number = 0 }): [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)*

*Defined in [src/scrollers/invitation.scroller.ts:7](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/invitation.scroller.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { fetchInvitations: FetchInvitations ; limit: number = 100; skip: number = 0 } |

**Returns:** [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

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

▸ **fetch**(): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)*

*Defined in [src/scrollers/invitation.scroller.ts:15](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/invitation.scroller.ts#L15)*

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

___

### restart

▸ **restart**(): void

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)*

*Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L55)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)*

*Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L36)*

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)*

*Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/scrollers/skip-limit-scroller.ts#L19)*

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)[]\>
