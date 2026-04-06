import { Injectable, signal, computed } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/expense';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  expenses = signal<Expense[]>([]);

  categories = signal<ExpenseCategory[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food',
  ]);

  totalExpense = computed(() =>
    this.expenses().reduce((sum, e) => sum + e.amount, 0)
  );

  highestExpense = computed(() =>
    this.expenses().length ? Math.max(...this.expenses().map((e) => e.amount)) : 0
  );

  averageExpense = computed(() =>
    this.expenses().length ? this.totalExpense() / this.expenses().length : 0
  );

  transactionCount = computed(() => this.expenses().length);

  addExpense(expense: Omit<Expense, 'id'>) {
    const newExpense: Expense = { ...expense, id: crypto.randomUUID() };
    this.expenses.update((list) => [...list, newExpense]);
  }

  deleteExpense(id: string) {
    this.expenses.update((list) => list.filter((e) => e.id !== id));
  }

  getExpenseById(id: string): Expense | undefined {
    return this.expenses().find((e) => e.id === id);
  }

  editExpense(updated: Expense) {
    this.expenses.update((list) =>
      list.map((e) => (e.id === updated.id ? updated : e))
    );
  }
}