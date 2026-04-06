import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe],
  templateUrl: './dashboard.html',
})
export class DashboardComponent {
  service = inject(ExpenseService);
}