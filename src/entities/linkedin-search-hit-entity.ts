export interface LinkedInSearchHit<T> {
  $recipeTypes: string[];
  $type: 'com.linkedin.voyager.search.SearchHit';
  hitInfo: T;
  targetPageInstance: string;
  trackingId: string;
}
