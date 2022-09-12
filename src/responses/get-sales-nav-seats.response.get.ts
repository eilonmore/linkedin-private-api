import { Seat } from '../entities/get-sales-nav-seats.entity';
import { Pagination } from '../entities/get-sales-nav-seats.entity';
import { Tag } from '../entities/get-sales-nav-seats.entity';

export interface GetSalesNavSeatsResponse {
    seats: Seat[];
    pagination: Pagination;
    tags: Tag[];
}