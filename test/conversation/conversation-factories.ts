import faker from 'faker';
import { orderBy, times } from 'lodash';
import { LinkedinConversation } from 'src';

import { FeaturedType, LinkedInParticipantReceipts } from '../../src/entities/linkedin-conversation.entity';
import { createMiniProfile } from '../profile/profile-factories';

const createReceipt = (count: number): LinkedInParticipantReceipts[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.messaging.ParticipantReceipts',
    fromEntity: faker.random.uuid(),
    fromParticipant: faker.random.uuid(),
    seenReceipt: {
      $type: 'com.linkedin.voyager.messaging.SeenReceipt',
      eventUrn: faker.random.uuid(),
      seenAt: faker.random.number(),
    },
  }));

const createConversation = (count: number): Partial<LinkedinConversation>[] =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.messaging.Conversation',
    '*events': [faker.random.uuid()],
    '*participants': [faker.random.uuid(), faker.random.uuid()],
    '*type': [faker.random.uuid()],
    archived: faker.random.boolean(),
    backendUrn: faker.random.uuid(),
    blocked: faker.random.boolean(),
    entityUrn: `urn:li:fs_conversation:${faker.random.uuid()}`,
    featureTypes: Object.values(FeaturedType.CREATE_NEW_GROUP_CHAT),
    firstMessageUrn: faker.random.uuid(),
    lastActivityAt: faker.random.number(),
    muted: faker.random.boolean(),
    notificationStatus: faker.random.word(),
    read: faker.random.boolean(),
    receipts: createReceipt(2),
    totalEventCount: faker.random.number(),
    unreadCount: faker.random.number(),
    viewerCurrentParticipant: faker.random.boolean(),
    withNonConnection: faker.random.boolean(),
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
