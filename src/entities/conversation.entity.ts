import { LinkedinConversation } from './linkedin-conversation.entity';
import { MiniProfile } from './mini-profile.entity';

export type ConversationId = string;

export interface Conversation extends LinkedinConversation {
  conversationId: ConversationId;
  participants: MiniProfile[];
}
