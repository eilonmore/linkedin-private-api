import { Client } from '../src';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

(async () => {
  const client = new Client();
  await client.login.userPass({ username, password });

  // Search for React development jobs in Israel
  const jobsScroller = await client.search.searchJobs({
    keywords: 'React',
    filters: { location: 'Israel' },
    limit: 20,
    skip: 5,
  });

  const [someReactJobHit] = await jobsScroller.scrollNext();
  const jobCompanyName = someReactJobHit.hitInfo.jobPosting.companyDetails.company.name;

  // Fetch the job's company
  const companiesScroller = await client.search.searchCompanies({ keywords: jobCompanyName });
  const [{ company: jobCompany }] = await companiesScroller.scrollNext();

  // Search for profiles and send an invitation
  const peopleScroller = await client.search.searchPeople({
    keywords: 'Bill Gates',
  });
  const [{ profile: billGates }] = await peopleScroller.scrollNext();

  const ownConnectionsScroller = await client.search.searchOwnConnections();
  const connections = await ownConnectionsScroller.scrollNext();

  const profileConnectionsScroller = await client.search.searchConnectionsOf({ profileId: connections[0].profile.profileId });
  const profileConnections = await profileConnectionsScroller.scrollNext();

  console.log(billGates, jobCompany, connections[0], profileConnections[0]);
})();
