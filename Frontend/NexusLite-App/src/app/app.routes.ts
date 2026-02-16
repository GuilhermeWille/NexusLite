import { Routes } from '@angular/router';
import { ClientList } from './features/client-list/client-list';
import { EmployeeList } from './features/employee-list/employee-list';
import { FinanceList } from './features/finance-list/finance-list';
import { BudgetList } from './features/budget-list/budget-list';


export const routes: Routes = [
  { path: 'clientes', component: ClientList },
  { path: 'employee', component: EmployeeList},
  { path: 'financeiro', component: FinanceList },
  { path: 'budgets', component: BudgetList },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];
