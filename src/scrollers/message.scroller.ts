import { isUndefined } from 'lodash';

import { ConversationId } from '../entities/conversation.entity';
import { MessageEvent } from '../entities/message-event.entity';
import { CreatedBeforeScroller } from './created-before-scroller';

type FetchMessages = ({
  conversationId,
  createdBefore,
}: {
  conversationId: ConversationId;
  createdBefore?: Date;
}) => Promise<MessageEvent[]>;

export class MessageScroller extends CreatedBeforeScroller<MessageEvent> {
  private fetchMessages: FetchMessages;

  private conversationId: ConversationId;

  fieldName: 'createdAt' = 'createdAt';

  constructor({
    fetchMessages,
    conversationId,
    createdBefore,
  }: {
    fetchMessages: FetchMessages;
    conversationId: ConversationId;
    createdBefore?: Date;
  }) {
    super({ createdBefore });

    this.fetchMessages = fetchMessages;
    this.conversationId = conversationId;
  }

  async fetch(): Promise<MessageEvent[]> {
    return this.fetchMessages({
      conversationId: this.conversationId,
      ...(isUndefined(this.createdBefore) ? {} : { createdBefore: new Date(this.createdBefore) }),
    });
  }
}
