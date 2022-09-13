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
* [sendEmailsInvitations](_src_repositories_invitation_repository_.invitationrepository.md#sendemailsinvitations)
* [sendInvitation](_src_repositories_invitation_repository_.invitationrepository.md#sendinvitation)
* [sendNoLimitInvitation](_src_repositories_invitation_repository_.invitationrepository.md#sendnolimitinvitation)

## Constructors

### constructor

\+ **new InvitationRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [InvitationRepository](_src_repositories_invitation_repository_.invitationrepository.md)

*Defined in [src/repositories/invitation.repository.ts:38](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/invitation.repository.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [InvitationRepository](_src_repositories_invitation_repository_.invitationrepository.md)

## Methods

### getReceivedInvitations

▸ **getReceivedInvitations**(`__namedParameters?`: { limit: number = 100; skip: number = 0 }): [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

*Defined in [src/repositories/invitation.repository.ts:52](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/invitation.repository.ts#L52)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { limit: number = 100; skip: number = 0 } | {} |

**Returns:** [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

___

### getSentInvitations

▸ **getSentInvitations**(`__namedParameters?`: { limit: number = 100; skip: number = 0 }): [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

*Defined in [src/repositories/invitation.repository.ts:44](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/invitation.repository.ts#L44)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { limit: number = 100; skip: number = 0 } | {} |

**Returns:** [InvitationScroller](_src_scrollers_invitation_scroller_.invitationscroller.md)

___

### sendEmailsInvitations

▸ **sendEmailsInvitations**(`__namedParameters`: { emailsByComma: string ; message: undefined \| string  }): Promise<void\>

*Defined in [src/repositories/invitation.repository.ts:60](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/invitation.repository.ts#L60)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { emailsByComma: string ; message: undefined \| string  } |

**Returns:** Promise<void\>

___

### sendInvitation

▸ **sendInvitation**(`__namedParameters`: { message: undefined \| string ; profileId: string ; trackingId: string  }): Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)\>

*Defined in [src/repositories/invitation.repository.ts:80](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/invitation.repository.ts#L80)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { message: undefined \| string ; profileId: string ; trackingId: string  } |

**Returns:** Promise<[Invitation](../interfaces/_src_entities_invitation_entity_.invitation.md)\>

___

### sendNoLimitInvitation

▸ **sendNoLimitInvitation**(`__namedParameters`: { message: undefined \| string ; profileId: string  }): Promise<void\>

*Defined in [src/repositories/invitation.repository.ts:70](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/invitation.repository.ts#L70)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { message: undefined \| string ; profileId: string  } |

**Returns:** Promise<void\>
