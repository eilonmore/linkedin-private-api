import { CreditSummary } from "src/entities/remove-sales-nav-seat.entity";

export interface RemoveSalesNavSeatResponse {
    removed: number[];
    creditSummary: CreditSummary;
}