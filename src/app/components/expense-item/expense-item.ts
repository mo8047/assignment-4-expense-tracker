import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Expense } from '../../models/expense';

@Component({
  selector: 'app-expense-item',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './expense-item.html',
})
export class ExpenseItemComponent {
  @Input() expense!: Expense;
  @Output() deleteExpense = new EventEmitter<string>();

  categoryColors: Record<string, string> = {
    Work: 'primary',
    Personal: 'secondary',
    Grocery: 'success',
    Utilities: 'warning',
    Shopping: 'info',
    Travel: 'dark',
    Food: 'danger',
  };

  get badgeClass() {
    return `badge bg-${this.categoryColors[this.expense.category] ?? 'secondary'}`;
  }

  get isHighExpense() {
    return this.expense.amount > 500;
  }
}