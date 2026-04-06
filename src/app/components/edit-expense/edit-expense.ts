import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense-service';
import { ExpenseCategory } from '../../models/expense';

@Component({
  selector: 'app-edit-expense',
  imports: [FormsModule],
  templateUrl: './edit-expense.html',
})
export class EditExpenseComponent implements OnInit {
  service = inject(ExpenseService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  id = '';
  title = '';
  amount: number = 0;
  category: ExpenseCategory = 'Food';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    const expense = this.service.getExpenseById(this.id);
    if (expense) {
      this.title = expense.title;
      this.amount = expense.amount;
      this.category = expense.category;
    }
  }

  submit() {
    if (!this.title.trim() || !this.amount || this.amount <= 0) return;
    this.service.editExpense({
      id: this.id,
      title: this.title.trim(),
      amount: this.amount,
      category: this.category,
    });
    this.router.navigate(['/expenses']);
  }
}