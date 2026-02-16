import { Component } from '@angular/core';
import { BaseComponent } from '../baseComponent';
import { Budget } from '../../models/Budget.model';
import { Budgetervice } from '../../services/budget.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget-list.html',
  styleUrl: './budget-list.css',
})
export class BudgetList extends BaseComponent<Budget>{
  constructor(protected budgetService: Budgetervice) {
    super(budgetService);
    this.activeSection = 'budgets';
  }
}
