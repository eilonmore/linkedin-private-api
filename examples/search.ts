import { Client } from '../src';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  const client = new Client();
  await client.login.userPass({ username, password });

  const peopleScroller = await client.search.searchPeople({ keywords: 'Bill Gates' });
  const people = await peopleScroller.scrollNext();

  const companiesScroller = await client.search.searchCompanies({ keywords: 'Microsoft' });
  const companies = await companiesScroller.scrollNext();

  const ownConnectionsScroller = await client.search.searchOwnConnections();
  const connections = await ownConnectionsScroller.scrollNext();

  const profileConnectionsScroller = await client.search.searchConnectionsOf({ profileId: connections[0].profile.profileId });
  const profileConnections = await profileConnectionsScroller.scrollNext();

  console.log(people[0], companies[0], connections[0], profileConnections[0]);
})();
