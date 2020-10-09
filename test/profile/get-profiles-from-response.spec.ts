import { forEach, size } from 'lodash';

import { getProfilesFromResponse } from '../../src/repositories/profile.repository';
import { createMiniProfile } from './profile-factories';

export const createResponse = (count: number) => ({
  data: {
    elements: [],
  },
  included: createMiniProfile(count),
});

test('should pull mini profiles out of response', () => {
  const response = createResponse(10);
  const profiles = getProfilesFromResponse(response);

  expect(size(profiles)).toEqual(10);
  forEach(profiles, profile => {
    expect(Object.keys(profile).sort()).toEqual(Object.keys(Object.values(profiles)[0]).sort());
  });
});

test('should set profile id and key the returned object by it', () => {
  const response = createResponse(10);
  const profiles = getProfilesFromResponse(response);

  forEach(profiles, (profile, profileId) => {
    expect(profile.profileId).toEqual(profileId);
  });
});

test('should set empty picture urls if there is no picture', () => {
  const response = createResponse(1);

  response.included[0].picture = undefined;

  const profiles = getProfilesFromResponse(response);

  expect(Object.values(profiles)[0].pictureUrls).toEqual([]);
});

test('should populate picture urls on the profile', () => {
  const response = createResponse(1);

  const profiles = getProfilesFromResponse(response);
  const profile = Object.values(profiles)[0];

  const originalPicture = response.included[0].picture;

  expect(profile.pictureUrls.length).toEqual(4);
  profile.pictureUrls.forEach((url, index) => {
    expect(url).toEqual(`${originalPicture?.rootUrl}${originalPicture?.artifacts[index].fileIdentifyingUrlPathSegment}`);
  });
});

test('should return empty object if there are no profiles', () => {
  const response = createResponse(1);

  response.included = [];

  const profiles = getProfilesFromResponse(response);

  expect(profiles).toEqual({});
});
