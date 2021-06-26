import faker from 'faker';
import { keyBy, omit, orderBy } from 'lodash';
import { reset, verify, when } from 'testdouble';
import { URL } from 'url';

import { linkedinApiUrl } from '../../config';
import { defaultMocks } from '../utils/defaultMocks';
import { createGetMessagesResponse, createSendMessageResponse } from './message-factories';

const conversationId = faker.datatype.uuid();
const requestUrl = new URL(`messaging/conversations/${conversationId}/events`, linkedinApiUrl).toString();
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

describe('getMessages', () => {
  const reqParams = {
    keyVersion: 'LEGACY_INBOX',
  };

  it('should fetch first page of messages', async () => {
    const { response, resultMessages } = createGetMessagesResponse(10);
    const keyedConversations = keyBy(resultMessages, 'entityUrn');

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });
    const messages = await messagesScroller.scrollNext();

    expect(messages.length).toEqual(10);
    messages.forEach((message: any) => {
      expect(omit(message, ['text', 'sentFrom'])).toEqual(keyedConversations[message.entityUrn]);
    });
  });

  it('should sort messages by createdAt descending', async () => {
    const { response } = createGetMessagesResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });
    const messages = await messagesScroller.scrollNext();

    expect(messages.length).toEqual(10);
    expect(messages).toEqual(orderBy(messages, 'createdAt', 'desc'));
  });

  it('should fetch first page of messages before specific date', async () => {
    const now = new Date();
    const { response, resultMessages } = createGetMessagesResponse(10);
    const keyedConversations = keyBy(resultMessages, 'entityUrn');

    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: now.getTime() } })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId, createdBefore: now });
    const messages = await messagesScroller.scrollNext();

    expect(messages.length).toEqual(10);
    messages.forEach((message: any) => {
      expect(omit(message, ['text', 'sentFrom'])).toEqual(keyedConversations[message.entityUrn]);
    });
  });

  it('should add the text message in the root of the result ', async () => {
    const { response, resultMessages } = createGetMessagesResponse(1);
    const mockedResultMessage = resultMessages[0];

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });
    const messages = await messagesScroller.scrollNext();

    expect(messages.length).toEqual(1);
    expect(messages[0].text).toEqual(mockedResultMessage.eventContent?.attributedBody.text);
  });

  it('should add sentFrom on the result', async () => {
    const { response, resultMessages, resultProfiles } = createGetMessagesResponse(1);
    const profileId = resultProfiles[0].entityUrn.replace('urn:li:fs_miniProfile:', '');

    const participantId = `urn:li:fs_messagingMember:(${faker.datatype.number()},${profileId})`;
    resultMessages[0]['*from'] = participantId;

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({ data: response });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });
    const messages = await messagesScroller.scrollNext();

    expect(messages[0].sentFrom.entityUrn).toEqual(resultProfiles[0].entityUrn);
    expect(messages[0].sentFrom.profileId).toEqual(profileId);
  });

  it('should be able to scroll messages using scroller', async () => {
    const { response: firstPageResponse, resultMessages: firstPageMockedMessages } = createGetMessagesResponse(10);
    const { response: secondPageResponse, resultMessages: secondPageMockedMessages } = createGetMessagesResponse(10);
    const { response: thirdPageResponse } = createGetMessagesResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedMessages[9].createdAt } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: secondPageMockedMessages[9].createdAt } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });
    const firstPageMessages = await messagesScroller.scrollNext();
    const secondPageMessages = await messagesScroller.scrollNext();
    const thirdPageMessages = await messagesScroller.scrollNext();

    expect(firstPageMessages.length).toEqual(10);
    expect(secondPageMessages.length).toEqual(10);
    expect(thirdPageMessages.length).toEqual(10);

    expect(firstPageMessages).not.toEqual(secondPageMessages);
    expect(firstPageMessages).not.toEqual(thirdPageMessages);
    expect(secondPageMessages).not.toEqual(thirdPageMessages);

    [...firstPageMessages, ...firstPageMessages, ...thirdPageMessages].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.messaging.Event');
    });
  });

  it('should be able to restart scroller position', async () => {
    const { response: firstPageResponse } = createGetMessagesResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });

    const firstPageMessages = await messagesScroller.scrollNext();

    messagesScroller.restart();

    const secondPageMessages = await messagesScroller.scrollNext();

    expect(firstPageMessages.length).toEqual(10);
    expect(firstPageMessages).toEqual(secondPageMessages);

    firstPageMessages.forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.messaging.Event');
    });
  });

  it('should be able to override scroller starting point', async () => {
    const createdBefore = new Date();

    const { response: firstPageResponse, resultMessages: firstPageMockedMessages } = createGetMessagesResponse(10);
    const { response: secondPageResponse, resultMessages: secondPageMockedMessages } = createGetMessagesResponse(10);
    const { response: thirdPageResponse } = createGetMessagesResponse(10);

    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: createdBefore.getTime() } })).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedMessages[9].createdAt } })).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: secondPageMockedMessages[9].createdAt } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId, createdBefore });
    const firstPageMessages = await messagesScroller.scrollNext();
    const secondPageMessages = await messagesScroller.scrollNext();
    const thirdPageMessages = await messagesScroller.scrollNext();

    expect(firstPageMessages.length).toEqual(10);
    expect(secondPageMessages.length).toEqual(10);
    expect(thirdPageMessages.length).toEqual(10);

    expect(firstPageMessages).not.toEqual(secondPageMessages);
    expect(firstPageMessages).not.toEqual(thirdPageMessages);
    expect(secondPageMessages).not.toEqual(thirdPageMessages);

    [...firstPageMessages, ...firstPageMessages, ...thirdPageMessages].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.messaging.Event');
    });
  });

  it('should be able to scroll to previous response pages', async () => {
    const { response: firstPageResponse, resultMessages: firstPageMockedMessages } = createGetMessagesResponse(10);
    const { response: secondPageResponse, resultMessages: secondPageMockedMessages } = createGetMessagesResponse(10);
    const { response: thirdPageResponse } = createGetMessagesResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });
    when(
      axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedMessages[0].createdAt! + 1000 } }),
    ).thenResolve({
      data: firstPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: firstPageMockedMessages[9].createdAt } }), {
      times: 2,
    }).thenResolve({
      data: secondPageResponse,
    });
    when(axios.get(requestUrl, { params: { ...reqParams, createdBefore: secondPageMockedMessages[9].createdAt } })).thenResolve({
      data: thirdPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });
    const firstPageMessages = await messagesScroller.scrollNext();
    const secondPageMessages = await messagesScroller.scrollNext();
    const thirdPageMessages = await messagesScroller.scrollNext();
    const fourthPageMessages = await messagesScroller.scrollBack();
    const fifthPageMessages = await messagesScroller.scrollBack();

    expect(firstPageMessages.length).toEqual(10);
    expect(secondPageMessages.length).toEqual(10);
    expect(thirdPageMessages.length).toEqual(10);

    expect(firstPageMessages).not.toEqual(secondPageMessages);
    expect(firstPageMessages).not.toEqual(thirdPageMessages);
    expect(secondPageMessages).not.toEqual(thirdPageMessages);
    expect(fourthPageMessages).toEqual(secondPageMessages);
    expect(fifthPageMessages).toEqual(firstPageMessages);

    [...firstPageMessages, ...firstPageMessages, ...thirdPageMessages].forEach((p: any) => {
      expect(p.$type).toEqual('com.linkedin.voyager.messaging.Event');
    });
  });

  it('should be return empty array if trying to scroll back from the starting point', async () => {
    const { response: firstPageResponse } = createGetMessagesResponse(10);

    when(axios.get(requestUrl, { params: reqParams })).thenResolve({
      data: firstPageResponse,
    });

    const client = await new Client().login.userPass({ username, password });
    const messagesScroller = client.message.getMessages({ conversationId });
    await messagesScroller.scrollNext();
    const messages = await messagesScroller.scrollBack();

    expect(messages).toEqual([]);
  });
});

describe('sendMessage', () => {
  const sendMessageRequestUrl = new URL('messaging/conversations', linkedinApiUrl).toString();
  const profileId = faker.datatype.uuid();
  const text = faker.lorem.sentence();
  const queryParams = {
    action: 'create',
  };
  const payload = {
    keyVersion: 'LEGACY_INBOX',
    conversationCreate: {
      eventCreate: {
        value: {
          'com.linkedin.voyager.messaging.create.MessageCreate': {
            attributedBody: {
              text,
              attributes: [],
            },
            attachments: [],
          },
        },
      },
      subtype: 'MEMBER_TO_MEMBER',
      recipients: [profileId],
    },
  };

  beforeEach(() => {});

  it('should send message to the correct profileId', async () => {
    const { response, resultCreationEvent } = createSendMessageResponse();

    when(axios.post(sendMessageRequestUrl, payload, { params: queryParams })).thenResolve({
      data: response,
    });

    const client = await new Client().login.userPass({ username, password });
    const createdMessage = await client.message.sendMessage({ profileId, text });

    expect(omit(createdMessage, 'text')).toEqual(resultCreationEvent);
  });

  it('should add text to the send message response', async () => {
    const { response } = createSendMessageResponse();

    when(axios.post(sendMessageRequestUrl, payload, { params: queryParams })).thenResolve({
      data: response,
    });

    const client = await new Client().login.userPass({ username, password });
    const createdMessage = await client.message.sendMessage({ profileId, text });

    expect(createdMessage.text).toEqual(text);
  });
});
