import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from '../baseComponent';
import { Finance } from '../../models/Finance.model';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-finance-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './finance-list.html',
  styleUrl: './finance-list.css',
})
export class FinanceList extends BaseComponent<Finance> {
  constructor(protected financeService: FinanceService) {
    super(financeService);
    this.activeSection = 'finance';
  }
}
