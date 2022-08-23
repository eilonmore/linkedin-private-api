export interface PhoneNumber {
  $type: 'com.linkedin.voyager.identity.profile.PhoneNumber';
  number: string;
  type: string;
}

export interface LinkedinContactInfo {
    phoneNumbers: PhoneNumber[];
    emailAddress: string;
}
