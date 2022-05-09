**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/invitation.repository"](../modules/_src_repositories_invitation_repository_.md) / InvitationRepository

# Class: InvitationRepository

## Hierarchy

* **InvitationRepository**

## Index

### Constructors

* [constructor](_src_repositories_invitation_repository_.invitationrepository.md#constructor)

### Methods

* [getReceivedInvitations](_src_repositories_invitation_repository_.invitationrepository.md#getreceivedinvitations)
* [getSentInvitations](_src_repositories_invitation_repository_.invitationrepository.md#getsentinvitations)
* [sendInvitation](_src_repositories_invitation_repository_.invitationrepository.md#sendinvitation)

## Constructors

### constructor

\+ **new InvitationRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [InvitationRepository](_src_repositories_invitation_repository_.invitationrepository.md)

*Defined in [src/repositories/invitation.repository.ts:37](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/invitation.repository.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [InvitationRepository](_src_repositories_invitation_repository_.invitationrepository.md)

## Methods

### getReceivedInvitations

▸ **getReceivedInvitations**(`__namedParameters?`: { limit: number = 100; skip: number = 0 }): [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

*Defined in [src/repositories/invitation.repository.ts:51](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/invitation.repository.ts#L51)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { limit: number = 100; skip: number = 0 } | {} |

**Returns:** [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

___

### getSentInvitations

▸ **getSentInvitations**(`__namedParameters?`: { limit: number = 100; skip: number = 0 }): [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

*Defined in [src/repositories/invitation.repository.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/invitation.repository.ts#L43)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { limit: number = 100; skip: number = 0 } | {} |

**Returns:** [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

___

### sendInvitation

▸ **sendInvitation**(`__namedParameters`: { message: undefined \| string ; profileId: string ; trackingId: string  }): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)\>

*Defined in [src/repositories/invitation.repository.ts:59](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/repositories/invitation.repository.ts#L59)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { message: undefined \| string ; profileId: string ; trackingId: string  } |

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)\>
