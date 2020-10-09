import { LinkedInEvent } from './linkedin-event.entity';
import { LinkedInMessage } from './linkedin-message.entity';
import { QuickReplayRecommendation } from './linkedin-quick-replay-recommendation.entity';

export interface LinkedInMessageEvent extends LinkedInEvent {
  eventContent: LinkedInMessage;
  quickReplyRecommendations: QuickReplayRecommendation[];
}
