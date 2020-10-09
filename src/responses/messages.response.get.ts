import { LinkedInCollectionResponse } from '../entities/linkedin-collection-response.entity';
import { LinkedInEventUrn } from '../entities/linkedin-event.entity';
import { LinkedInMessageEvent } from '../entities/linkedin-message-event.entity';
import { LinkedInMiniProfile } from '../entities/linkedin-mini-profile.entity';

export type GetMessagesResponse = LinkedInCollectionResponse<LinkedInEventUrn, LinkedInMiniProfile | LinkedInMessageEvent>;
