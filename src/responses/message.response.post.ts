import { LinkedEventCreateResponse } from '../entities/linkedin-event-create-response';

export interface SendMessageResponse {
  data: {
    $type: 'com.linkedin.restli.common.ActionResponse';
    value: LinkedEventCreateResponse;
  };
  included: [];
}
