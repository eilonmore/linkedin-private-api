import { Client } from '../src';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  const client = new Client();
  await client.login.userPass({ username, password });

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

  const ownConnectionsScroller = await client.search.searchOwnConnections();
  const connections = await ownConnectionsScroller.scrollNext();

  const profileConnectionsScroller = await client.search.searchConnectionsOf({ profileId: connections[0].profile.profileId });
  const profileConnections = await profileConnectionsScroller.scrollNext();

  console.log(billGates, connections[0], profileConnections[0]);
})();
