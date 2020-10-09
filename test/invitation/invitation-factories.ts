import faker from 'faker';
import { orderBy, random, times } from 'lodash';

import { INVITATION_TYPE } from '../../src/entities/linkedin-invitation.entity';
import { createMiniProfile, createMiniProfileId } from '../profile/profile-factories';

const createInvitation = (count: number) =>
  times(count, () => ({
    $type: 'com.linkedin.voyager.relationships.invitation.Invitation',
    '*fromMember': createMiniProfileId(),
    '*toMember': createMiniProfileId(),
    customMessage: faker.random.boolean(),
    entityUrn: faker.random.uuid(),
    invitationType: Object.values(INVITATION_TYPE)[random(0, 1)],
    invitee: {
      $type: 'com.linkedin.voyager.relationships.invitation.ProfileInvitee',
      '*miniProfile': createMiniProfileId(),
    },
    mailboxItemId: faker.random.uuid(),
    sentTime: faker.random.number(),
    sharedSecret: faker.random.word(),
    toMemberId: faker.random.uuid(),
    unseen: faker.random.boolean(),
  }));

export const createGetInvitationsResponse = (count: number) => {
  const resultInvitations = createInvitation(count);
  const resultProfiles = createMiniProfile(count * 2); // two profiles for each invitation
  const response = {
    data: {},
    included: [...resultInvitations, ...resultProfiles],
  };

  return { response, resultInvitations: orderBy(resultInvitations, 'sentTime', 'desc'), resultProfiles };
};
