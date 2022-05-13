export const extractProfileId = (profileUrn: string): string => {
  const openingBracketIndex = profileUrn.indexOf('(');
  const bracketSegment = profileUrn.substr(openingBracketIndex + 1);
  const profileId = bracketSegment.split(',')[0];

  return profileId
}

export const extractPublicIdentifier = (profileUrl: string): string => {
  const fromIndex = profileUrl.lastIndexOf('in/') + 4;
  const result = profileUrl.substr(fromIndex).replace('/','');

  return result
}