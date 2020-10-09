interface Paging {
  count: number;
  links: string[];
  start: number;
}

export interface LinkedInCollectionResponse<T, I, M = undefined> {
  data: {
    elements: T[];
    $type: 'com.linkedin.restli.common.CollectionResponse';
    entityUrn: string;
    paging: Paging;
    metadata?: M;
  };
  included: I[];
}
