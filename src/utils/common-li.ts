export const extractProfileId = (profileUrn: string): string => {
  const openingBracketIndex = profileUrn.indexOf('(');
  const bracketSegment = profileUrn.substr(openingBracketIndex + 1);
  const profileId = bracketSegment.split(',')[0];

  return profileId
}
