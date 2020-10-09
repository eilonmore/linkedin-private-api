import { Invitation } from '../entities/invitation.entity';
import { SkipLimitScroller } from './skip-limit-scroller';

type FetchInvitations = ({ skip, limit }: { skip?: number; limit?: number }) => Promise<Invitation[]>;

export class InvitationScroller extends SkipLimitScroller<Invitation> {
  private fetchInvitations: FetchInvitations;

  constructor({ fetchInvitations, skip = 0, limit = 100 }: { fetchInvitations: FetchInvitations; skip: number; limit: number }) {
    super({ skip, limit });

    this.fetchInvitations = fetchInvitations;
  }

  async fetch(): Promise<Invitation[]> {
    return this.fetchInvitations({ skip: this.skip, limit: this.limit });
  }
}
