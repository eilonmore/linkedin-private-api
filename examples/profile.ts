import { Client } from '../src';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  const client = new Client();
  await client.login.userPass({ username, password });

  const peopleScroller = client.search.searchPeople({ keywords: 'Bill Gates' });
  const billGates = (await peopleScroller.scrollNext())[0];
  const fullProfile = await client.profile.getProfile({ publicIdentifier: billGates.profile.publicIdentifier });

  const ownProfile = await client.profile.getOwnProfile();

  console.log(fullProfile, ownProfile);
})();
