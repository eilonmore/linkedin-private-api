import { LinkedInMessageEvent } from './linkedin-message-event.entity';
import { MiniProfile } from './mini-profile.entity';

export interface MessageEvent extends LinkedInMessageEvent {
  text: string;
  sentFrom: MiniProfile;
}
