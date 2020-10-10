import { isUndefined } from 'lodash';

import { ProfileId } from '../entities';
import { Conversation } from '../entities/conversation.entity';
import { CreatedBeforeScroller } from './created-before-scroller';

type FetchConversations = ({
  createdBefore,
}: {
  recipients?: ProfileId | ProfileId[];
  createdBefore?: Date;
}) => Promise<Conversation[]>;

export class ConversationScroller extends CreatedBeforeScroller<Conversation> {
  private fetchConversations: FetchConversations;

  fieldName: 'lastActivityAt' = 'lastActivityAt';

  recipients?: ProfileId | ProfileId[];

  constructor({
    fetchConversations,
    recipients,
    createdBefore,
  }: {
    fetchConversations: FetchConversations;
    recipients?: ProfileId | ProfileId[];
    createdBefore?: Date;
  }) {
    super({ createdBefore });

    this.recipients = recipients;

    this.fetchConversations = fetchConversations;
  }

  async fetch(): Promise<Conversation[]> {
    return this.fetchConversations({
      ...(isUndefined(this.createdBefore) ? {} : { createdBefore: new Date(this.createdBefore) }),
      ...(this.recipients && { recipients: this.recipients }),
    });
  }
}
