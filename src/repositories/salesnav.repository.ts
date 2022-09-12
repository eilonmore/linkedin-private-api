import { GetSalesNavSeatsResponse } from 'src/responses/get-sales-nav-seats.response.get';
import { EditSalesNavSeatResponse } from 'src/responses/edit-sales-nav-seat.response.post';
import { AddSalesNavSeatResponse } from 'src/responses/add-sales-nav-seat.response.post';
import { RemoveSalesNavSeatResponse } from 'src/responses/remove-sales-nav-seat.response.post';
import { Client } from '../core/client';

export class SalesNavRepository {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  async getSalesNavSeats(): Promise<GetSalesNavSeatsResponse> {
    const response = await this.client.request.salesNav.getSalesNavSeats();
    return response;
  }

  async editSalesNavSeat({ seatId, csrfToken, isSalesSeat, isAdminSeat }: {
    seatId: number,
    csrfToken: string,
    isSalesSeat: boolean,
    isAdminSeat: boolean
  }): Promise<EditSalesNavSeatResponse> {
    const response = await this.client.request.salesNav.editSalesNavSeat({
      seatId,
      csrfToken,
      isSalesSeat,
      isAdminSeat
    });

    return response;
  }

  async addSalesNavSeat({ emailAddress, csrfToken }: {
    emailAddress: string,
    csrfToken: string
  }): Promise<AddSalesNavSeatResponse> {
    const response = await this.client.request.salesNav.addSalesNavSeat({ emailAddress, csrfToken });
    return response;
  }

  async removeSalesNavSeat({ seatId, csrfToken }: {
    seatId: number,
    csrfToken: string
  }): Promise<RemoveSalesNavSeatResponse> {
    const response = await this.client.request.salesNav.removeSalesNavSeat({
      seatId,
      csrfToken
    });
    
    return response;
  }
}
