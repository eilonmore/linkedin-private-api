export interface SendSalesNavigatorMessageResponse {
  data: {
    $type: 'com.linkedin.restli.common.ActionResponse';
    values: {
      threadId: string;
      messageId: string;
      $type: 'com.linkedin.sales.messaging.message.CreateMessageResponse'
    }
  };
  included: [];
}
