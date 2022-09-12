import { CreditSummary } from "src/entities/add-sales-nav-seat.entity";
import { Errors } from "src/entities/add-sales-nav-seat.entity";

export interface AddSalesNavSeatResponse {
    creditSummary: CreditSummary;
    errors: Errors;
}
