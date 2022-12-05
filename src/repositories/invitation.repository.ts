import { keyBy, orderBy } from 'lodash';

import { Client } from '../core/client';
import { Invitation } from '../entities/invitation.entity';
import { INVITATION_TYPE, LinkedInInvitation } from '../entities/linkedin-invitation.entity';
import { GetReceivedInvitationResponse } from '../responses/received-invitations.response.get';
import { GetSentInvitationResponse } from '../responses/sent-invitations.response.get';
import { InvitationScroller } from '../scrollers';
import { getProfilesFromResponse } from './profile.repository';

const TO_MEMBER_FIELD = '*toMember';
const FROM_MEMBER_FIELD = '*fromMember';

const parseInvitationResponse =
  <T extends GetSentInvitationResponse | GetReceivedInvitationResponse>(
    idField: typeof TO_MEMBER_FIELD | typeof FROM_MEMBER_FIELD,
  ) =>
  (response: T): Invitation[] => {
    const results = response.included || [];
    const profiles = keyBy(getProfilesFromResponse<T>(response), 'entityUrn');
    const invitations = results.filter(r => r.$type === INVITATION_TYPE && !!r[idField]) as LinkedInInvitation[];

    return orderBy(
      invitations.map(invitation => ({
        ...invitation,
        profile: profiles[invitation[idField]],
      })),
      'sentTime',
      'desc',
    );
  };

const parseSentInvitations = parseInvitationResponse<GetSentInvitationResponse>(TO_MEMBER_FIELD);
const parseReceivedInvitations = parseInvitationResponse<GetReceivedInvitationResponse>(FROM_MEMBER_FIELD);

export class InvitationRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  async replyInvitation({
    invitationId,
    invitationSharedSecret,
    action = 'accept',
  }: {
    invitationId: string;
    invitationSharedSecret: string;
    action?: string;
  }) {
    const params = { action };
    const payload = {
      invitationId,
      invitationSharedSecret,
      isGenericInvitation: false,
    };
    console.log('PARAMS + PAYLOAD', params, payload);

    return await this.client.request.invitation.replyInvitation({ invitationId, params, payload });
  }

  getSentInvitations({ skip = 0, limit = 100 } = {}): InvitationScroller {
    return new InvitationScroller({
      skip,
      limit,
      fetchInvitations: this.fetchSent.bind(this),
    });
  }

  getReceivedInvitations({ skip = 0, limit = 100 } = {}): InvitationScroller {
    return new InvitationScroller({
      skip,
      limit,
      fetchInvitations: this.fetchReceived.bind(this),
    });
  }

  async sendInvitation({
    profileId,
    trackingId,
    message,
  }: {
    profileId: string;
    trackingId: string;
    message?: string;
  }): Promise<Invitation> {
    await this.client.request.invitation.sendInvitation({ profileId, trackingId, message });

    const lastInvitation = (await this.fetchSent({ skip: 0, limit: 1 }))[0];

    return lastInvitation;
  }

  private async fetchReceived({ skip = 0, limit = 100 } = {}): Promise<Invitation[]> {
    const response = await this.client.request.invitation.getReceivedInvitations({ skip, limit });

    return parseReceivedInvitations(response);
  }

  private async fetchSent({ skip = 0, limit = 100 } = {}): Promise<Invitation[]> {
    const response = await this.client.request.invitation.getSentInvitations({ skip, limit });

    return parseSentInvitations(response);
  }
}
