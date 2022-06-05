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


  // Search for profiles and send an invitation
  const peopleScroller = await client.search.searchPeople({
    keywords: 'Shoe',
  });
  const [{ profile: billGates }] = await peopleScroller.scrollNext();

  const ownConnectionsScroller = await client.search.searchOwnConnections();
  const connections = await ownConnectionsScroller.scrollNext();

  const profileConnectionsScroller = await client.search.searchConnectionsOf({ profileId: connections[0].profile.profileId });
  const profileConnections = await profileConnectionsScroller.scrollNext();

  console.log(billGates,  connections[0], profileConnections[0]);
})();
