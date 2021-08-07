import faker from 'faker';
import { keyBy, omit, orderBy } from 'lodash';
import { reset, when } from 'testdouble';
import { URL } from 'url';

import { linkedinApiUrl } from '../../config';
import { defaultMocks } from '../utils/defaultMocks';
import { createGetInvitationsResponse } from './invitation-factories';

const username = 'username';
const password = 'password';
let axios: any;
let Client: any;

beforeEach(async () => {
  ({ axios, Client } = await defaultMocks());
});

afterEach(() => {
  reset();
});

describe('getSentInvitations', () => {
  const requestUrl = new URL('relationships/sentInvitationViewsV2', linkedinApiUrl).toString();
  const reqParams = {
    start: 0,
    count: 100,
    invitationType: 'CONNECTION',
    q: 'invitationType',
  };

  it('should fetch first page of invitations', async () => {
    const { response, resultInvitations } = createGetInvitationsResponse(10);
    const keyedInvitations = keyBy(resultInvitations, 'entityUrn');

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getSentInvitations();
    const invitations = await invitationScroller.scrollNext();

    expect(invitations.length).toEqual(10);
    invitations.forEach((invitation: any) =>
      expect(omit(invitation, ['profile'])).toEqual(keyedInvitations[invitation.entityUrn]),
    );
  });

  it('should return empty array if undefined data was returned', async () => {
    const { response } = createGetInvitationsResponse(10);

    const mutatedResponse = omit(response, ['included']);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: mutatedResponse });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getSentInvitations();
    const invitations = await invitationScroller.scrollNext();

    expect(invitations.length).toEqual(0);
  });

  it('should sort invitations by sentTime descending', async () => {
    const { response } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getSentInvitations();
    const invitations = await invitationScroller.scrollNext();

    expect(invitations.length).toEqual(10);
    expect(invitations).toEqual(orderBy(invitations, 'createdAt', 'desc'));
  });

  it('should allow override skip and limit', async () => {
    const skip = 2;
    const limit = 1;
    const { response, resultInvitations } = createGetInvitationsResponse(1);

    when(axios.get(requestUrl, { params: { ...reqParams, start: skip, count: limit } })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getSentInvitations({ skip, limit });
    const invitations = await invitationScroller.scrollNext();

    expect(invitations.length).toEqual(1);
    expect(omit(invitations[0], ['profile'])).toEqual(resultInvitations[0]);
  });

  it('should add the invitation profile on the result', async () => {
    const { response, resultInvitations, resultProfiles } = createGetInvitationsResponse(1);
    const profileId = resultProfiles[0].entityUrn.replace('urn:li:fs_miniProfile:', '');

    resultInvitations[0]['*toMember'] = resultProfiles[0].entityUrn;
    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getSentInvitations();
    const invitations = await invitationScroller.scrollNext();
    const invitation = invitations[0];

    expect(invitation.profile.entityUrn).toEqual(resultProfiles[0].entityUrn);
    expect(invitation.profile.profileId).toEqual(profileId);
  });

  it('should be able to scroll invitations using scroller', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getSentInvitations();
    const firstPageInvitations = await invitationScroller.scrollNext();
    const secondPageInvitations = await invitationScroller.scrollNext();
    const thirdPageInvitations = await invitationScroller.scrollNext();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(10);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be able to scroll invitations using scroller', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getSentInvitations();
    const firstPageInvitations = await invitationScroller.scrollNext();
    const secondPageInvitations = await invitationScroller.scrollNext();
    const thirdPageInvitations = await invitationScroller.scrollNext();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(10);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be able to override scroller starting point and number of invitations per scroll', async () => {
    const skip = 2;
    const limit = 5;

    const { response: firstPageResponse } = createGetInvitationsResponse(limit);
    const { response: secondPageResponse } = createGetInvitationsResponse(limit);
    const { response: thirdPageResponse } = createGetInvitationsResponse(5);

    when(axios.get(requestUrl, { params: { ...reqParams, start: skip, count: limit } })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: skip + limit, count: limit } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: skip + limit * 2, count: limit } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getSentInvitations({ skip, limit });
    const firstPageInvitations = await invitationsScroller.scrollNext();
    const secondPageInvitations = await invitationsScroller.scrollNext();
    const thirdPageInvitations = await invitationsScroller.scrollNext();

    expect(firstPageInvitations.length).toEqual(limit);
    expect(secondPageInvitations.length).toEqual(limit);
    expect(thirdPageInvitations.length).toEqual(limit);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be able to scroll to previous response pages', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams }), { times: 2 }).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } }), {
      times: 2,
    }).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getSentInvitations();
    const firstPageInvitations = await invitationsScroller.scrollNext();
    const secondPageInvitations = await invitationsScroller.scrollNext();
    const thirdPageInvitations = await invitationsScroller.scrollNext();
    const fourthPageInvitations = await invitationsScroller.scrollBack();
    const fifthPageInvitations = await invitationsScroller.scrollBack();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(10);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);
    expect(fourthPageInvitations).toEqual(secondPageInvitations);
    expect(fifthPageInvitations).toEqual(firstPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be return empty array if trying to scroll back from the starting point', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getSentInvitations();
    await invitationsScroller.scrollNext();
    const invitations = await invitationsScroller.scrollBack();

    expect(invitations).toEqual([]);
  });

  it('should be not scroll after end of results', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    thirdPageResponse.included = [];

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } }), {
      times: 2,
    }).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getSentInvitations();
    const firstPageInvitations = await invitationsScroller.scrollNext();
    const secondPageInvitations = await invitationsScroller.scrollNext();
    const thirdPageInvitations = await invitationsScroller.scrollNext();
    const fourthPageInvitations = await invitationsScroller.scrollNext();
    const fifthPageInvitations = await invitationsScroller.scrollBack();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(0);
    expect(fourthPageInvitations.length).toEqual(0);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);
    expect(fifthPageInvitations).toEqual(secondPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });
});

describe('getReceivedInvitations', () => {
  const requestUrl = new URL('relationships/invitationViews', linkedinApiUrl).toString();
  const reqParams = {
    start: 0,
    count: 100,
    q: 'receivedInvitation',
  };

  it('should fetch first page of invitations', async () => {
    const { response, resultInvitations } = createGetInvitationsResponse(10);
    const keyedInvitations = keyBy(resultInvitations, 'entityUrn');

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getReceivedInvitations();
    const invitations = await invitationScroller.scrollNext();

    expect(invitations.length).toEqual(10);
    invitations.forEach((invitation: any) =>
      expect(omit(invitation, ['profile'])).toEqual(keyedInvitations[invitation.entityUrn]),
    );
  });

  it('should sort invitations by sentTime descending', async () => {
    const { response } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getReceivedInvitations();
    const invitations = await invitationScroller.scrollNext();

    expect(invitations.length).toEqual(10);
    expect(invitations).toEqual(orderBy(invitations, 'createdAt', 'desc'));
  });

  it('should allow override skip and limit', async () => {
    const skip = 2;
    const limit = 1;
    const { response, resultInvitations } = createGetInvitationsResponse(1);

    when(axios.get(requestUrl, { params: { ...reqParams, start: skip, count: limit } })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getReceivedInvitations({ skip, limit });
    const invitations = await invitationScroller.scrollNext();

    expect(invitations.length).toEqual(1);
    expect(omit(invitations[0], ['profile'])).toEqual(resultInvitations[0]);
  });

  it('should add sender profile on the result', async () => {
    const { response, resultInvitations, resultProfiles } = createGetInvitationsResponse(1);
    const profileId = resultProfiles[0].entityUrn.replace('urn:li:fs_miniProfile:', '');

    resultInvitations[0]['*fromMember'] = resultProfiles[0].entityUrn;
    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getReceivedInvitations();
    const invitations = await invitationScroller.scrollNext();
    const invitation = invitations[0];

    expect(invitation.profile.entityUrn).toEqual(resultProfiles[0].entityUrn);
    expect(invitation.profile.profileId).toEqual(profileId);
  });

  it('should be able to scroll invitations using scroller', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getReceivedInvitations();
    const firstPageInvitations = await invitationScroller.scrollNext();
    const secondPageInvitations = await invitationScroller.scrollNext();
    const thirdPageInvitations = await invitationScroller.scrollNext();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(10);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be able to scroll invitations using scroller', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationScroller = client.invitation.getReceivedInvitations();
    const firstPageInvitations = await invitationScroller.scrollNext();
    const secondPageInvitations = await invitationScroller.scrollNext();
    const thirdPageInvitations = await invitationScroller.scrollNext();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(10);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be able to override scroller starting point and number of invitations per scroll', async () => {
    const skip = 2;
    const limit = 5;

    const { response: firstPageResponse } = createGetInvitationsResponse(limit);
    const { response: secondPageResponse } = createGetInvitationsResponse(limit);
    const { response: thirdPageResponse } = createGetInvitationsResponse(5);

    when(axios.get(requestUrl, { params: { ...reqParams, start: skip, count: limit } })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: skip + limit, count: limit } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: skip + limit * 2, count: limit } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getReceivedInvitations({ skip, limit });
    const firstPageInvitations = await invitationsScroller.scrollNext();
    const secondPageInvitations = await invitationsScroller.scrollNext();
    const thirdPageInvitations = await invitationsScroller.scrollNext();

    expect(firstPageInvitations.length).toEqual(limit);
    expect(secondPageInvitations.length).toEqual(limit);
    expect(thirdPageInvitations.length).toEqual(limit);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be able to scroll to previous response pages', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams }), { times: 2 }).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } }), {
      times: 2,
    }).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getReceivedInvitations();
    const firstPageInvitations = await invitationsScroller.scrollNext();
    const secondPageInvitations = await invitationsScroller.scrollNext();
    const thirdPageInvitations = await invitationsScroller.scrollNext();
    const fourthPageInvitations = await invitationsScroller.scrollBack();
    const fifthPageInvitations = await invitationsScroller.scrollBack();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(10);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);
    expect(fourthPageInvitations).toEqual(secondPageInvitations);
    expect(fifthPageInvitations).toEqual(firstPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations, ...thirdPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });

  it('should be return empty array if trying to scroll back from the starting point', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getReceivedInvitations();
    await invitationsScroller.scrollNext();
    const invitations = await invitationsScroller.scrollBack();

    expect(invitations).toEqual([]);
  });

  it('should be not scroll after end of results', async () => {
    const { response: firstPageResponse } = createGetInvitationsResponse(10);
    const { response: secondPageResponse } = createGetInvitationsResponse(10);
    const { response: thirdPageResponse } = createGetInvitationsResponse(10);

    thirdPageResponse.included = [];

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 100 } }), {
      times: 2,
    }).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, start: 200 } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitationsScroller = client.invitation.getReceivedInvitations();
    const firstPageInvitations = await invitationsScroller.scrollNext();
    const secondPageInvitations = await invitationsScroller.scrollNext();
    const thirdPageInvitations = await invitationsScroller.scrollNext();
    const fourthPageInvitations = await invitationsScroller.scrollNext();
    const fifthPageInvitations = await invitationsScroller.scrollBack();

    expect(firstPageInvitations.length).toEqual(10);
    expect(secondPageInvitations.length).toEqual(10);
    expect(thirdPageInvitations.length).toEqual(0);
    expect(fourthPageInvitations.length).toEqual(0);

    expect(firstPageInvitations).not.toEqual(secondPageInvitations);
    expect(firstPageInvitations).not.toEqual(thirdPageInvitations);
    expect(secondPageInvitations).not.toEqual(thirdPageInvitations);
    expect(fifthPageInvitations).toEqual(secondPageInvitations);

    [...firstPageInvitations, ...secondPageInvitations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.relationships.invitation.Invitation');
    });
  });
});

describe('sendInvitation', () => {
  const profileId = faker.datatype.uuid();
  const trackingId = faker.datatype.uuid();
  const sentInvitationRequestUrl = new URL('relationships/sentInvitationViewsV2', linkedinApiUrl).toString();
  const requestUrl = new URL('growth/normInvitations', linkedinApiUrl).toString();
  const requestPayload = {
    trackingId,
    emberEntityName: 'growth/invitation/norm-invitation',
    invitee: {
      'com.linkedin.voyager.growth.invitation.InviteeProfile': {
        profileId,
      },
    },
  };

  it('should send invitation with the correct parameters', async () => {
    const message = 'Hey there!';
    const client = await new Client().login.userPass({ username, password });

    when(axios.get(), { ignoreExtraArgs: true }).thenResolve({
      data: { included: [] },
    });
    when(axios.post(requestUrl, { ...requestPayload, message }), { ignoreExtraArgs: true, times: 1 }).thenResolve({
      data: { included: [] },
    });

    await client.invitation.sendInvitation({ profileId, trackingId, message });

    // would have thrown if haven't hit the stub
  });

  it('should return the the invitation object as the result', async () => {
    const reqParams = {
      start: 0,
      count: 1,
      invitationType: 'CONNECTION',
      q: 'invitationType',
    };
    const { response, resultInvitations } = createGetInvitationsResponse(1);

    when(axios.post(requestUrl, requestPayload), { ignoreExtraArgs: true, times: 1 }).thenResolve({
      data: { included: [] },
    });
    when(axios.get(sentInvitationRequestUrl, { params: reqParams })).thenResolve({
      data: response,
    });

    const client = await new Client().login.userPass({ username, password });
    const invitation = await client.invitation.sendInvitation({ profileId, trackingId });

    expect(omit(invitation, 'profile')).toEqual(resultInvitations[0]);
  });

  it('should return add profile to the result', async () => {
    const reqParams = {
      start: 0,
      count: 1,
      invitationType: 'CONNECTION',
      q: 'invitationType',
    };
    const { response, resultInvitations, resultProfiles } = createGetInvitationsResponse(1);
    const resultProfileId = resultProfiles[0].entityUrn.replace('urn:li:fs_miniProfile:', '');

    resultInvitations[0]['*toMember'] = resultProfiles[0].entityUrn;

    const client = await new Client().login.userPass({ username, password });

    when(axios.post(requestUrl, requestPayload), { ignoreExtraArgs: true, times: 1 }).thenResolve({
      data: { included: [] },
    });
    when(axios.get(sentInvitationRequestUrl, { params: reqParams })).thenResolve({
      data: response,
    });

    const invitation = await client.invitation.sendInvitation({ profileId, trackingId });

    expect(invitation.profile.entityUrn).toEqual(resultProfiles[0].entityUrn);
    expect(invitation.profile.profileId).toEqual(resultProfileId);
  });
});
