import { LinkedInVectorArtifact } from './linkedin-vector-artifact.entity';

export interface LinkedInVectorImage {
  $type: 'com.linkedin.common.VectorImage';
  artifacts: LinkedInVectorArtifact[];
  rootUrl: string;
}
