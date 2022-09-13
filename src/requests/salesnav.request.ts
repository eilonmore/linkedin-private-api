import { GetSalesNavSeatsResponse } from 'src/responses/get-sales-nav-seats.response.get';
import { EditSalesNavSeatResponse } from 'src/responses/edit-sales-nav-seat.response.post';
import { AddSalesNavSeatResponse } from 'src/responses/add-sales-nav-seat.response.post';
import { RemoveSalesNavSeatResponse } from 'src/responses/remove-sales-nav-seat.response.post';

import { LinkedInRequest } from '../core/linkedin-request';

export class SalesNavRequest {
    private request: LinkedInRequest;

    constructor({ request }: { request: LinkedInRequest }) {
        this.request = request;
    }

    getSalesNavSeats(): Promise<GetSalesNavSeatsResponse> {
        var queryParams = {
            start: 0,
            count: 15,
            sortBy: 'createdDate',
            filterBy: 'showAll',
            showTags: true,
            isTLE: false
        };

        let url = 'https://www.linkedin.com/sales/admin/seats/feed';
        return this.request.get<GetSalesNavSeatsResponse>(url, {
            params: queryParams,
        });
    }

    editSalesNavSeat({ seatId, csrfToken, isSalesSeat, isAdminSeat }: {
        seatId: number,
        csrfToken: string,
        isSalesSeat: boolean,
        isAdminSeat: boolean
    }): Promise<EditSalesNavSeatResponse> {
        let url = `https://www.linkedin.com/sales/admin/seats/${seatId}/edit?csrfToken=${csrfToken}`;
        return this.request.post<EditSalesNavSeatResponse>(url,
            `returnSummary=true&adminSeat=${isAdminSeat}&salesSeat=${isSalesSeat}&reportAdminSeat=false`);
    }

    addSalesNavSeat({ emailAddress, csrfToken }: {
        emailAddress: string,
        csrfToken: string,
    }): Promise<AddSalesNavSeatResponse> {
        let url = `https://www.linkedin.com/sales/admin/seats/add?csrfToken=${csrfToken}`;
        return this.request.post<AddSalesNavSeatResponse>(url,
            `emails%5B%5D=${emailAddress}&grantAdmin=false&grantSalesSeat=true&grantTLESeat=false`);
    }

    removeSalesNavSeat({ seatId, csrfToken }: {
        seatId: number,
        csrfToken: string,
    }): Promise<RemoveSalesNavSeatResponse> {
        let url = `https://www.linkedin.com/sales/admin/seats/remove?csrfToken=${csrfToken}`;
        return this.request.post<RemoveSalesNavSeatResponse>(url, `seats%5B%5D=${seatId}&returnSummary=true`);
    }
}