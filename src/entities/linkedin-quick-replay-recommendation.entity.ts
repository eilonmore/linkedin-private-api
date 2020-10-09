import { AttributeText } from './linkedin-attribute-text.entity';

export interface QuickReplayRecommendation {
  $type: 'com.linkedin.voyager.messaging.QuickReply';
  content: AttributeText;
  objectUrn: string;
  replyType: string;
  trackingId: string;
}
