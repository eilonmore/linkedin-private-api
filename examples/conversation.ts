import { Client } from '../src';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  const client = new Client();
  await client.login.userPass({ username, password });

  const conversationScroller = client.conversation.getConversations();
  const conversations = await conversationScroller.scrollNext();

  const conversation = await client.conversation.getConversation({ conversationId: conversations[0].conversationId });

  console.log(conversations, conversation);
})();
