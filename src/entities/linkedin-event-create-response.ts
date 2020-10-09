export interface LinkedEventCreateResponse {
  $type: 'com.linkedin.voyager.messaging.create.EventCreateResponse';
  backendConversationUrn: string;
  backendEventUrn: string;
  conversationUrn: string;
  createdAt: number;
  eventUrn: string;
}
