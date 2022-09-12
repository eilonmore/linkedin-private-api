import { Seat } from '../entities/edit-sales-nav-seat.entity';
import { Summary } from '../entities/edit-sales-nav-seat.entity';

export interface EditSalesNavSeatResponse {
  seats: Seat[];
  summary: Summary;
}