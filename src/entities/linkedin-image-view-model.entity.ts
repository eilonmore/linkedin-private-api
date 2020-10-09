import { LinkedInImageAttribute } from './linkedin-image-attribute.entity';

export interface LinkedInImageViewModel {
  $type: 'com.linkedin.voyager.common.ImageViewModel';
  attributes: LinkedInImageAttribute[];
}
