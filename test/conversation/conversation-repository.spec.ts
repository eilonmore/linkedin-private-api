import faker from 'faker';
import { keyBy, omit, orderBy } from 'lodash';
import { reset, when } from 'testdouble';
import { URL } from 'url';

import { linkedinApiUrl } from '../../config';
import { defaultMocks } from '../utils/defaultMocks';
import { createGetConversationResponse, createGetConversationsResponse } from './conversation-factories';

const requestUrl = new URL('messaging/conversations', linkedinApiUrl).toString();
const reqParams = {
  keyVersion: 'LEGACY_INBOX',
};
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

describe('getConversations', () => {
  it('should fetch first page of conversations', async () => {
    const { response, resultConversations } = createGetConversationsResponse(10);
    const keyedConversations = keyBy(resultConversations, 'entityUrn');

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const converationsScroller = client.conversation.getConversations();
    const conversations = await converationsScroller.scrollNext();

    expect(conversations.length).toEqual(10);
    conversations.forEach((conversation: any) => {
      expect(omit(conversation, ['conversationId', 'participants'])).toEqual(keyedConversations[conversation.entityUrn]);
    });
  });

  it('should sort conversations by lastActivity time descending', async () => {
    const { response } = createGetConversationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const converationsScroller = client.conversation.getConversations();
    const conversations = await converationsScroller.scrollNext();

    expect(conversations.length).toEqual(10);
    expect(conversations).toEqual(orderBy(conversations, 'lastActivityAt', 'desc'));
  });

  it('should fetch first page of conversations before specific date', async () => {
    const now = new Date();
    const { response, resultConversations } = createGetConversationsResponse(10);
    const keyedConversations = keyBy(resultConversations, 'entityUrn');

    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: now.getTime() } })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const converationsScroller = client.conversation.getConversations({ createdBefore: now });
    const conversations = await converationsScroller.scrollNext();

    expect(conversations.length).toEqual(10);
    conversations.forEach((conversation: any) => {
      expect(omit(conversation, ['conversationId', 'participants'])).toEqual(keyedConversations[conversation.entityUrn]);
    });
  });

  it('should fetch conversations by single profileId', async () => {
    const profileId = faker.datatype.uuid();
    const { response, resultConversations } = createGetConversationsResponse(1);
    const keyedConversations = keyBy(resultConversations, 'entityUrn');

    when(axios.get(requestUrl, { params: { ...reqParams, recipients: [profileId], q: 'participants' } })).thenResolve({
      data: response,
    });

    const client = await new Client().login.userPass({ username, password });
    const converationsScroller = client.conversation.getConversations({ recipients: profileId });
    const conversations = await converationsScroller.scrollNext();

    expect(conversations.length).toEqual(1);
    expect(omit(conversations[0], ['conversationId', 'participants'])).toEqual(keyedConversations[conversations[0].entityUrn]);
  });

  it('should fetch conversations by multiple profileId', async () => {
    const profileIds = [faker.datatype.uuid(), faker.datatype.uuid()];
    const { response, resultConversations } = createGetConversationsResponse(1);
    const keyedConversations = keyBy(resultConversations, 'entityUrn');

    when(axios.get(requestUrl, { params: { ...reqParams, recipients: profileIds, q: 'participants' } })).thenResolve({
      data: response,
    });

    const client = await new Client().login.userPass({ username, password });
    const converationsScroller = client.conversation.getConversations({ recipients: profileIds });
    const conversations = await converationsScroller.scrollNext();

    expect(conversations.length).toEqual(1);
    expect(omit(conversations[0], ['conversationId', 'participants'])).toEqual(keyedConversations[conversations[0].entityUrn]);
  });

  it('should add conversationId on the result conversations', async () => {
    const conversationId = faker.datatype.uuid();
    const { response, resultConversations } = createGetConversationsResponse(1);
    resultConversations[0].entityUrn = `urn:li:fs_conversation:${conversationId}`;

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const converationsScroller = client.conversation.getConversations();
    const conversations = await converationsScroller.scrollNext();

    expect(conversations.length).toEqual(1);
    expect(conversations[0].conversationId).toEqual(conversationId);
  });

  it('should populate participants profile on the result conversations', async () => {
    const { response, resultConversations, resultProfiles } = createGetConversationsResponse(1);
    const profileIds = resultProfiles.map(profile => profile.entityUrn.replace('urn:li:fs_miniProfile:', ''));
    const participantIds = profileIds.map(profileId => `urn:li:fs_messagingMember:(${faker.datatype.number()},${profileId})`);
    resultConversations[0]['*participants'] = participantIds;

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const converationsScroller = client.conversation.getConversations();
    const conversations = await converationsScroller.scrollNext();

    expect(conversations[0].participants[0].entityUrn).toEqual(resultProfiles[0].entityUrn);
    expect(conversations[0].participants[0].profileId).toEqual(profileIds[0]);
    expect(conversations[0].participants[1].entityUrn).toEqual(resultProfiles[1].entityUrn);
    expect(conversations[0].participants[1].profileId).toEqual(profileIds[1]);
  });

  it('should be able to scroll conversations using the scroller', async () => {
    const { response: firstPageResponse, resultConversations: firstPageMockedConversations } = createGetConversationsResponse(10);
    const { response: secondPageResponse, resultConversations: secondPageMockedConversations } =
      createGetConversationsResponse(10);
    const { response: thirdPageResponse } = createGetConversationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(
      axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedConversations[9].lastActivityAt } }),
    ).thenResolve({
      data: secondPageResponse,
    });
    when(
      axios.get(requestUrl, { params: { ...reqParams, createdBefore: secondPageMockedConversations[9].lastActivityAt } }),
    ).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const conversationScroller = client.conversation.getConversations();
    const firstPageConversations = await conversationScroller.scrollNext();
    const secondPageConversations = await conversationScroller.scrollNext();
    const thirdPageConversations = await conversationScroller.scrollNext();

    expect(firstPageConversations.length).toEqual(10);
    expect(secondPageConversations.length).toEqual(10);
    expect(thirdPageConversations.length).toEqual(10);

    expect(firstPageConversations).not.toEqual(secondPageConversations);
    expect(firstPageConversations).not.toEqual(thirdPageConversations);
    expect(secondPageConversations).not.toEqual(thirdPageConversations);

    [...firstPageConversations, ...firstPageConversations, ...thirdPageConversations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.messaging.Conversation');
    });
  });

  it('should be able to override starting scroller starting point', async () => {
    const createdBefore = new Date();

    const { response: firstPageResponse, resultConversations: firstPageMockedConversations } = createGetConversationsResponse(10);
    const { response: secondPageResponse, resultConversations: secondPageMockedConversations } =
      createGetConversationsResponse(10);
    const { response: thirdPageResponse } = createGetConversationsResponse(10);

    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: createdBefore.getTime() } })).thenResolve({
      data: firstPageResponse,
    });
    when(
      axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedConversations[9].lastActivityAt } }),
    ).thenResolve({
      data: secondPageResponse,
    });
    when(
      axios.get(requestUrl, { params: { ...reqParams, createdBefore: secondPageMockedConversations[9].lastActivityAt } }),
    ).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const conversationScroller = client.conversation.getConversations({ createdBefore });
    const firstPageConversations = await conversationScroller.scrollNext();
    const secondPageConversations = await conversationScroller.scrollNext();
    const thirdPageConversations = await conversationScroller.scrollNext();

    expect(firstPageConversations.length).toEqual(10);
    expect(secondPageConversations.length).toEqual(10);
    expect(thirdPageConversations.length).toEqual(10);

    expect(firstPageConversations).not.toEqual(secondPageConversations);
    expect(firstPageConversations).not.toEqual(thirdPageConversations);
    expect(secondPageConversations).not.toEqual(thirdPageConversations);

    [...firstPageConversations, ...firstPageConversations, ...thirdPageConversations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.messaging.Conversation');
    });
  });

  it('should be able to scroll to previous response pages', async () => {
    const { response: firstPageResponse, resultConversations: firstPageMockedConversations } = createGetConversationsResponse(10);
    const { response: secondPageResponse, resultConversations: secondPageMockedConversations } =
      createGetConversationsResponse(10);
    const { response: thirdPageResponse } = createGetConversationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(
      axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedConversations[0].lastActivityAt! + 1000 } }),
    ).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedConversations[9].lastActivityAt } }), {
      times: 2,
    }).thenResolve({
      data: secondPageResponse,
    });
    when(
      axios.get(requestUrl, { params: { ...reqParams, createdBefore: secondPageMockedConversations[9].lastActivityAt } }),
    ).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const conversationScroller = client.conversation.getConversations();
    const firstPageConversations = await conversationScroller.scrollNext();
    const secondPageConversations = await conversationScroller.scrollNext();
    const thirdPageConversations = await conversationScroller.scrollNext();
    const fourthPageConversations = await conversationScroller.scrollBack();
    const fifthPageConversations = await conversationScroller.scrollBack();

    expect(firstPageConversations.length).toEqual(10);
    expect(secondPageConversations.length).toEqual(10);
    expect(thirdPageConversations.length).toEqual(10);

    expect(firstPageConversations).not.toEqual(secondPageConversations);
    expect(firstPageConversations).not.toEqual(thirdPageConversations);
    expect(secondPageConversations).not.toEqual(thirdPageConversations);
    expect(fourthPageConversations).toEqual(secondPageConversations);
    expect(fifthPageConversations).toEqual(firstPageConversations);

    [...firstPageConversations, ...firstPageConversations, ...thirdPageConversations].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.messaging.Conversation');
    });
  });

  it('should be return empty array if trying to scroll back from the starting point', async () => {
    const { response: firstPageResponse } = createGetConversationsResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const conversationScroller = client.conversation.getConversations();
    await conversationScroller.scrollNext();
    const conversations = await conversationScroller.scrollBack();

    expect(conversations).toEqual([]);
  });
});

describe('getConversation', () => {
  const createRequestUrl = (conversationId: string) => `${requestUrl}/${conversationId}`;

  it('should get conversation by conversation id', async () => {
    const conversationId = faker.datatype.uuid();
    const { response, resultConversation } = createGetConversationResponse();

    when(axios.get(createRequestUrl(conversationId), { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const conversation = await client.conversation.getConversation({ conversationId });

    expect(omit(conversation, ['conversationId', 'participants'])).toEqual(resultConversation);
  });

  it('should add conversation id to the result conversation', async () => {
    const conversationId = faker.datatype.uuid();
    const { response, resultConversation } = createGetConversationResponse();
    resultConversation.entityUrn = `urn:li:fs_conversation:${conversationId}`;

    when(axios.get(createRequestUrl(conversationId), { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const conversation = await client.conversation.getConversation({ conversationId });

    expect(conversation.conversationId).toEqual(conversationId);
  });

  it('should add participants to the result conversation', async () => {
    const conversationId = faker.datatype.uuid();
    const { response, resultConversation, resultProfiles } = createGetConversationResponse();
    const profileIds = resultProfiles.map(profile => profile.entityUrn.replace('urn:li:fs_miniProfile:', ''));
    const participantIds = profileIds.map(profileId => `urn:li:fs_messagingMember:(${faker.datatype.number()},${profileId})`);
    resultConversation['*participants'] = participantIds;

    when(axios.get(createRequestUrl(conversationId), { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const conversation = await client.conversation.getConversation({ conversationId });

    expect(conversation.participants[0].entityUrn).toEqual(resultProfiles[0].entityUrn);
    expect(conversation.participants[0].profileId).toEqual(profileIds[0]);
    expect(conversation.participants[1].entityUrn).toEqual(resultProfiles[1].entityUrn);
    expect(conversation.participants[1].profileId).toEqual(profileIds[1]);
  });
});
