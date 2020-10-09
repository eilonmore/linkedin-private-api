import { isUndefined } from 'lodash';

import { Conversation } from '../entities/conversation.entity';
import { CreatedBeforeScroller } from './created-before-scroller';

type FetchConversations = ({ createdBefore }: { createdBefore?: Date }) => Promise<Conversation[]>;

export class ConversationScroller extends CreatedBeforeScroller<Conversation> {
  private fetchConversations: FetchConversations;

  fieldName: 'lastActivityAt' = 'lastActivityAt';

  constructor({
    fetchConversations,
    createdBefore,
  }: {
    fetchConversations: FetchConversations;
    createdBefore?: Date;
  }) {
    super({ createdBefore });

    this.fetchConversations = fetchConversations;
  }

  async fetch(): Promise<Conversation[]> {
    return this.fetchConversations({
      ...(isUndefined(this.createdBefore) ? {} : { createdBefore: new Date(this.createdBefore) }),
    });
  }
}
