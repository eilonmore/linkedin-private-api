**[linkedin-private-api](README.md)**

> [Globals](globals.md)

# NodeJS LinkedIn Private API

![Build](https://github.com/eilonmore/linkedin-private-api/workflows/Build/badge.svg?branch=master)

Wrapper API for LinkedIn unofficial API, written in TypeScript.  
No tokens are needed for using this API, only a working LinkedIn account.

## Installation

```
npm install linkedin-private-api
```

## Example usage

Check out [the post](https://codeburst.io/how-i-nailed-a-job-with-this-nodejs-linkedin-bot-6fcada2afbe1) I've written that describes a great example of how to use this library.  
Also, see a list of examples [here](https://github.com/eilonmore/linkedin-private-api/tree/master/examples).

```typescript
import { Client } from 'linkedin-private-api';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  // Login
  const client = new Client();
  await client.login.userPass({ username, password });

  // search for companies
  const companiesScroller = await client.search.searchCompanies({ keywords: 'Microsoft' });
  const [{ company: microsoft }] = await companiesScroller.scrollNext();

  // Search for profiles and send an invitation
  const peopleScroller = await client.search.searchPeople({
    keywords: 'Bill Gates',
    filters: {
      pastCompany: microsoft.companyId,
    },
  });
  const [{ profile: billGates }] = await peopleScroller.scrollNext();

  await client.invitation.sendInvitation({
    profileId: billGates.profileId,
    trackingId: billGates.trackingId,
  });

  // Search in my connections
  const ownConnectionsScroller = await client.search.searchOwnConnections({ keywords: 'Bill Gates', limit: 1 });
  const connections = await ownConnectionsScroller.scrollNext();

  // Get conversation
  const [billConversation] = await client.conversation
    .getConversations({
      recipients: billGates.profileId,
    })
    .scrollNext();

  const conversationMessages = await client.message
    .getMessages({
      conversationId: billConversation.conversationId,
    })
    .scrollNext();

  // Send a message
  const sentMessage = await client.message.sendMessage({
    profileId: billGates.profileId,
    text: 'Hey Bill!',
  });
})();
```

## API

### Repositories

Classes that expose methods for communicating with linkedin API.  
Each repository describes a LinkedIn entity that we can operate on it. Example: `InvitationRepository`.

The methods are divided into 3 types:

- Single entity getters - example: `conversation.getConversation({ conversationId: CONVERSATION_ID })`
  Single entity getters return a [LinkedIn Entity](#entities).

- Multiple entities getters - for example `invitation.getSentInvitations({ skip: 10, limit: 5 })`  
  Multiple entities getters return a [Scroller](#scrollers).

- Mutations - for example `invitation.sendInvitation({ ... })`  
  Mutations return a [Response entity](#entities)

| Name           | Example Usage                                | Docs Reference                                                                                                                                                       |
| -------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `login`        | `client.login.userPass(...)`                 | [Login Docs](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/classes/_src_core_login_.login.md)                                                   |
| `search`       | `client.search.searchPeople()`               | [Search Docs](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/classes/_src_repositories_search_repository_.searchrepository.md)                   |
| `profile`      | `client.profile.getOwnProfile()`             | [Profile Docs](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/classes/_src_repositories_profile_repository_.profilerepository.md)                |
| `invitation`   | `client.invitation.getReceivedInvitations()` | [Invitation Docs](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/classes/_src_repositories_invitation_repository_.invitationrepository.md)       |
| `conversation` | `client.conversation.getConversation(...)`   | [Conversation Docs](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/classes/_src_repositories_conversation_repository_.conversationrepository.md) |
| `message`      | `client.message.getMessages(...)`            | [Message Docs](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/classes/_src_repositories_message_repository_.messagerepository.md)                |

### Entities

Interfaces that describe LinkedIn objects. For example - `Conversation` object.  
Most of those entities contain the properties returned from the LinkedIn response and in addition to these properties, the API adds some extra properties to make the usage a bit easier.

The full list of entities can be found [here](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/modules/_src_entities_index_.md#attributetext), this is the list of the most important ones:

| Entities                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Profile](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_profile_entity_.profile.md)                                                  |
| [MiniProfile](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_mini_profile_entity_.miniprofile.md)                                     |
| [MiniCompany](https://github.com/eilonmore/linkedin-private-api/blob/conversation-id/docs/interfaces/_src_entities_mini_company_entity_.minicompany.md)                            |
| [Invitation](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_invitation_entity_.invitation.md)                                         |
| [Conversation](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_conversation_entity_.conversation.md)                                   |
| [Message](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_message_event_entity_.messageevent.md)                                       |
| [CompanySearchHit](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_company_search_hit_entity_.companysearchhit.md)                     |
| [PeopleSearchHit](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_people_search_hit_entity_.peoplesearchhit.md)                        |
| [MessageCreateResponse](https://github.com/eilonmore/linkedin-private-api/blob/master/docs/interfaces/_src_entities_message_create_response_entity_.messageeventcreateresponse.md) |

### Scrollers

Wrapper classes that enable a convenient work with paginated responses. For example - `PeopleScroller`.  
Most of LinkedIn requests return paginated responses, (just like in the UI), scrollers just provide a structured way to navigate between pages.

There are two types of scrollers:

- **Index scroller** - Accepts 2 properties:  
  `skip (number)` - Starting index (How many entities to skip).  
  `limit (number)` - How many entities to fetch on each iteration.

- **Time scrollers** - Accepts one property:  
  `createdBefore (Date)` - Defines the point of time to start fetching entities.

Example:

```typescript
// index scroller
let companiesScroller = client.search.searchCompanies();
let companies = await companiesScroller.scrollNext(); // returns first page with 10 results
companies = await companiesScroller.scrollNext(); // next page
companies = await companiesScroller.scrollBack(); // previous page

// overriding skip and limit
companiesScroller = client.search.searchCompanies({ skip: 100, limit: 1 });
companies = await companiesScroller.scrollNext(); // returns first page with 1 results
companies = await companiesScroller.scrollNext(); // next page
companies = await companiesScroller.scrollBack(); // previous page

// overriding createdBefore for time scroller
const twoDaysAgo = moment().subtract(2, 'days').toDate();
let messagesScroller = client.message.getMessages({
  conversationId: CONVERSATION_ID,
  createdBefore: twoDaysAgo,
});
messages = await companiesScroller.scrollNext();
```

## What's coming next?

**A lot!**

This is a new project, and as such, there's a lot that need to be done.  
Some new features that I expect to develop soon:

- Media support - fetch, like, comment and create a new post.
- Invitation improvements - be able to do some more actions like "remove connection".
- Search improvements - support jobs searching.
- Improve login API
- Add services so automate common workflows

Want a specific feature? Please open a feature request :)  
Also, i'll be more than happy to welcome new contributors to this project.

## Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by Linkedin or any of its affiliates or subsidiaries. This is an independent and unofficial API. Use at your own risk.

Note that using this API might cause your account being banned.  
Always take care; we cannot be held for any account being banned.
