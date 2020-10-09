import { AttributeText } from './linkedin-attribute-text.entity';

export interface LinkedInMessage {
  $type: 'com.linkedin.voyager.messaging.event.MessageEvent';
  attributedBody: AttributeText;
  body: string;
  messageBodyRenderFormat: string;
}
