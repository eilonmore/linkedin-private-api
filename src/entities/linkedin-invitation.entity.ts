import { MiniProfileUrn } from './linkedin-mini-profile.entity';

enum InvitationType {
  PENDING,
  SENT,
}

interface LinkedInProfileInvitee {
  $type: 'com.linkedin.voyager.relationships.invitation.ProfileInvitee';
  '*miniProfile': MiniProfileUrn;
}

export const INVITATION_TYPE = 'com.linkedin.voyager.relationships.invitation.Invitation';

export interface LinkedInInvitation {
  $type: typeof INVITATION_TYPE;
  '*fromMember': MiniProfileUrn;
  '*toMember': MiniProfileUrn;
  customMessage: boolean;
  entityUrn: string;
  invitationType: InvitationType;
  invitee: LinkedInProfileInvitee;
  mailboxItemId: string;
  sentTime: number;
  sharedSecret: string;
  toMemberId: string;
  unseen?: boolean;
}
