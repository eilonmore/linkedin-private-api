import { LinkedEventCreateResponse } from './linkedin-event-create-response';

export interface MessageEventCreateResponse extends LinkedEventCreateResponse {
  text: string;
}
