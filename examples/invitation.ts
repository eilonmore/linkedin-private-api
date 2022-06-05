import { Client } from '../src';
import { SocksProxyAgent } from 'socks-proxy-agent'
var agent = new SocksProxyAgent(`socks://127.0.0.1:10808`);
var JSESSIONID = "ajax:8462475366033195827";
var li_at = "AQEDATp3vT0FeQRWAAABgEd2ry0AAAGBUJ0tVlYAG--0uWMuRh8DweF5nMjcNPSv6tcgDxGIbMU488u8p_MCM4_y53xtqGTdhIMp5BuqlHJgHby3lIyZh4L6-OAsAkOpBBlsgUS-pzJek-aEOXkHqrlr";
(async () => {
  const client = new Client({
    httpAgent: agent,
    httpsAgent:agent
  });
  await client.login.userCookie({
    cookies:{
      JSESSIONID: JSESSIONID,
      li_at: li_at
    },
    useCache: false
  })
  const receivedScroller = client.invitation.getReceivedInvitations();
  const receivedInvitations = await receivedScroller.scrollNext();

  const sentScroller = client.invitation.getSentInvitations();
  const sentInvitations = await sentScroller.scrollNext();

  const peopleScroller = client.search.searchPeople({ keywords: 'Bill Gates' });
  const people = await peopleScroller.scrollNext();
  const billGates = people[0].profile;
  const sentInvitation = await client.invitation.sendInvitation({
    profileId: billGates.profileId,
    trackingId: billGates.trackingId,
  });

  console.log(receivedInvitations, sentInvitations, sentInvitation);
})();
