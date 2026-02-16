import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from '../baseComponent'
import { Employee } from '../../models/Employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
})
export class EmployeeList extends BaseComponent<Employee> {
  constructor(protected employeeService: EmployeeService) {
    super(employeeService);
    this.activeSection = 'employee'
  }
}
