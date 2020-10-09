import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInInvitation } from '../entities/linkedin-invitation.entity';
import { MiniProfile } from '../entities/mini-profile.entity';

interface ReceivedInvitationMetadata {
  $type: 'com.linkedin.voyager.common.CollectionMetadata';
  paginationToken: string;
}

export type GetReceivedInvitationResponse = LinkedInCollectionResponse<
  string,
  MiniProfile | LinkedInInvitation,
  ReceivedInvitationMetadata
>;
