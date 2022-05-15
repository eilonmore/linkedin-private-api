export const extractProfileId = (profileUrn: string): string => {
  if(profileUrn.includes('(')){
    const openingBracketIndex = profileUrn.indexOf('(');
    const bracketSegment = profileUrn.substr(openingBracketIndex + 1);
    const profileId = bracketSegment.split(',')[0];
    return profileId;
  }
  else{
    return profileUrn;
  }
}

export const extractPublicIdentifier = (profileUrl: string): string => {
  if(profileUrl.includes('in/')){
    const fromIndex = profileUrl.indexOf('in/') + 3;
    const publicIdentifier = profileUrl.substr(fromIndex).replace('/','');
    return publicIdentifier;  
  }
  else{
    return profileUrl;
  }
}