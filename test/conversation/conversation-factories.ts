import faker from 'faker';
import { orderBy, times } from 'lodash';
import { LinkedinConversation } from 'src';

import { FeaturedType, LinkedInParticipantReceipts } from '../../src/entities/linkedin-conversation.entity';
import { createMiniProfile } from '../profile/profile-factories';

const createReceipt = (count: number): LinkedInParticipantReceipts[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.messaging.ParticipantReceipts',
    fromEntity: faker.datatype.uuid(),
    fromParticipant: faker.datatype.uuid(),
    seenReceipt: {
      $type: 'com.linkedin.voyager.messaging.SeenReceipt',
      eventUrn: faker.datatype.uuid(),
      seenAt: faker.datatype.number(),
    },
  }));

const createConversation = (count: number): Partial<LinkedinConversation>[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.messaging.Conversation',
    '*events': [faker.datatype.uuid()],
    '*participants': [faker.datatype.uuid(), faker.datatype.uuid()],
    '*type': [faker.datatype.uuid()],
    archived: faker.datatype.boolean(),
    backendUrn: faker.datatype.uuid(),
    blocked: faker.datatype.boolean(),
    entityUrn: `urn:li:fs_conversation:${faker.datatype.uuid()}`,
    featureTypes: Object.values(FeaturedType.CREATE_NEW_GROUP_CHAT),
    firstMessageUrn: faker.datatype.uuid(),
    lastActivityAt: faker.datatype.number(),
    muted: faker.datatype.boolean(),
    notificationStatus: faker.random.word(),
    read: faker.datatype.boolean(),
    receipts: createReceipt(2),
    totalEventCount: faker.datatype.number(),
    unreadCount: faker.datatype.number(),
    viewerCurrentParticipant: faker.datatype.boolean(),
    withNonConnection: faker.datatype.boolean(),
  }));

export const createGetConversationsResponse = (count: number) => {
  const resultConversations = createConversation(count);
  const resultProfiles = createMiniProfile(count * 2); // two participants for each conversation
  const response = {
    data: {},
    included: [...resultConversations, ...resultProfiles],
  };

  return { response, resultConversations: orderBy(resultConversations, 'lastActivityAt', 'desc'), resultProfiles };
};

export const createGetConversationResponse = () => {
  const resultConversation = createConversation(1)[0];
  const resultProfiles = createMiniProfile(2); // two participants for each conversation
  const response = {
    data: resultConversation,
    included: resultProfiles,
  };

  return { response, resultConversation, resultProfiles };
};
