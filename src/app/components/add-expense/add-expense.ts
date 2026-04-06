import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseCategory } from '../../models/expense';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
})
export class AddExpenseComponent {
  service = inject(ExpenseService);
  router = inject(Router);

  title = '';
  amount: number | null = null;
  category: ExpenseCategory = 'Food';

  submit() {
    if (!this.title.trim() || !this.amount || this.amount <= 0) return;
    this.service.addExpense({
      title: this.title.trim(),
      amount: this.amount,
      category: this.category,
    });
    this.router.navigate(['/expenses']);
  }
}