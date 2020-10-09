import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInInvitation } from '../entities/linkedin-invitation.entity';
import { MiniProfile } from '../entities/mini-profile.entity';

interface SentInvitationMetadata {
  $type: 'com.linkedin.voyager.relationships.invitation.SentInvitationsMetadata';
  invitationType: string;
}

export type GetSentInvitationResponse = LinkedInCollectionResponse<
  string,
  MiniProfile | LinkedInInvitation,
  SentInvitationMetadata
>;
