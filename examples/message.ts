import { Client } from '../src';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  const client = new Client();
  await client.login.userPass({ username, password });

  const conversationScroller = await client.conversation.getConversations();
  const conversations = await conversationScroller.scrollNext();

  const messagesScroller = client.message.getMessages({ conversationId: conversations[0].conversationId });
  const messages = await messagesScroller.scrollNext();

  const sentMessage = await client.message.sendMessage({
    conversationId: conversations[0].conversationId,
    text: 'Hey!',
  });

  console.log(messages, sentMessage);
})();
