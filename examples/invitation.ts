import { Client } from '../src';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  const client = new Client();
  await client.login.userPass({ username, password });

  const receivedScroller = await client.invitation.getReceivedInvitations();
  const receivedInvitations = await receivedScroller.scrollNext();

  const sentScroller = await client.invitation.getSentInvitations();
  const sentInvitations = await sentScroller.scrollNext();

  const peopleScroller = await client.search.searchPeople({ keywords: 'Bill Gates' });
  const people = await peopleScroller.scrollNext();
  const billGates = people[0].profile;
  const sentInvitation = await client.invitation.sendInvitation({
    profileId: billGates.profileId,
    trackingId: billGates.trackingId,
  });

  console.log(receivedInvitations, sentInvitations, sentInvitation);
})();
