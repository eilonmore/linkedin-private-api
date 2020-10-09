# NodeJS LinkedIn Private API

Wrapper API for LinkedIn unofficial API, written in TypeScript.  
No tokens are needed for using this API, only a working LinkedIn account

## Installation

```
npm install linkedin-private-api
```

## Example usage
See a list of examples here [here](TBD).
```typescript
import { Client } from 'linkedin-private-api';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  // Login
  const client = new Client();
  await client.login.userPass({ username, password });
	
  // Search for profiles and send invitation
  const peopleScroller = await client.search.searchPeople({ keywords: 'Bill Gates' });
  const [billGates] = await peopleScroller.scrollNext();
  
  await client.invitation.sendInvitation({
    profileId: billGates.profileId,
    trackingId: billGates.trackingId,
  });
  
  // Search in my connections
  const ownConnectionsScroller = await client.search.searchOwnConnections({ keywords: 'Bill Gates', limit: 1 });
  const connections = await ownConnectionsScroller.scrollNext();

  // Get conversations and send message
  const conversationScroller = await client.conversation.getConversations();
  const conversations = await conversationScroller.scrollNext();
  
  const billGatesConversation = conversations.find(
  	conversation => conversation.participants.find(participant => participant.profileId === billGates.profileId)
  )
  
  const sentMessage = await client.message.sendMessage({
    conversationId: billGatesConversation.conversationId,
    text: 'Hey!',
  });
})();
```

## API
### Repositories

Classes that expose methods for communicating with linkedin API.  
Each repository describes a LinkedIn entity that we can operate on it. Example: ``InvitationRepository``.  

The methods are divided into 3 types:  
* Single entity getters - example: ``conversation.getConversation({ conversationId: CONVERSATION_ID })`` 
Single entity getters return a [LinkedIn Entity](TBD).  

* Multiple entities getters - for example ``invitation.getSentInvitations({ skip: 10, limit: 5 })``  
Multiple entities getters return a [Scroller](TBD).  

* Mutations - for example ``invitation.sendInvitation({ ... })``  
Mutatios return a [Response entity](TBD)

|Name|Example Usage|Docs Reference|
|-|-|-|
|`login`|`client.login.userPass(...)`|[Login Docs](TBD)|
|`search`|`client.search.searchPeople()`|[Search Docs](TBD)|
|`profile`|`client.profile.getOwnProfile()`|[Profile Docs](TBD)|
|`invitation`|`client.invitation.getReceivedInvitations()`|[Invitation Docs](TBD)|
|`conversation`|`client.conversation.getConversation(...)`|[Conversation Docs](TBD)|
|`message`|`client.message.getMessages(...)`|[Conversation Docs](TBD)|


### Entities 
Interfaces that describe LinkedIn objects. For example - ``Conversation`` object.  
Most of those entities contain the properties returned from the LinkedIn response and in addition to these properties, the API adds some extra properties to make the usage a bit easier.

The full list of entities can be found [here](TBD), this is the list of the most important ones:

|Entities|
|-|
|[Profile](TBD)|
|[MiniProfile](TBD)|
|[Invitation](TBD)|
|[Conversation](TBD)|
|[Message](TBD)|
|[CompanySearchHit](TBD)|
|[PeopleSearchHit](TBD)|
|[MessageCreateResponse](TBD)|


### Scrollers
Wrapper classes that enable a convenient work with paginated responses. For example - ``PeopleScroller``.  
Most of LinkedIn requests return paginated responses, (just like in the UI), scrollers just provide a structured way to navigate between pages.  

There are two types of scrollers:  
* **Index scroller** - Accepts 2 properties:  
``skip (number)`` - Starting index (How many entities to skip).  
``limit (number)`` - How many entities to fetch on each iteration.

* **Time scrollers** - Accepts one property:  
``createdBefore (Date)`` - Defines the point of time to start fetching entities.


Example:
```typescript
// index scroller
let companiesScroller = await client.search.searchCompanies(); 
let companies = await companiesScroller.scrollNext(); // returns first page with 10 results
companies = await companiesScroller.scrollNext(); // next page
companies = await companiesScroller.scrollBack(); // previous page

// overriding skip and limit
companiesScroller = await client.search.searchCompanies({ skip: 100, limit: 1 }); 
companies = await companiesScroller.scrollNext(); // returns first page with 1 results
companies = await companiesScroller.scrollNext(); // next page
companies = await companiesScroller.scrollBack(); // previous page

// overriding createdBefore for time scroller
const twoDaysAgo = moment().subtract(2, 'days').toDate();
let messagesScroller = await client.message.getMessages({
  conversationId: CONVERSATION_ID,
  createdBefore: twoDaysAgo
});
messages = await companiesScroller.scrollNext();
```

## What's coming next?
**A lot!**

This is a new project, and as such, there's a lot that need to be done.  
Some new features that I expect to develop soon:
* Media support - fetch, like, comment and create a new post.
* Messaging improvements - be able to send messages directly to a profile and start a new conversation.
* Invitation improvements - be able to do some more actions like "remove connection".
* Search improvements - support jobs searching.
* Improve login API

Want a specific feature? Please open a feature request :)   
Also, i'll be more than happy to welcome new contributors to this project.


## Legal
This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by Linkedin or any of its affiliates or subsidiaries. This is an independent and unofficial API. Use at your own risk.

Note that using this API might cause your account being banned. Please note that we are not responsible for any accounts being banned.