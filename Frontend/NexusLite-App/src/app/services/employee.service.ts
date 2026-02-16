import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService.service';
import { Employee } from '../models/Employee.model'

@Injectable({
  providedIn: 'root',
})

export class EmployeeService extends BaseService<Employee> {
  constructor(protected override http: HttpClient) {
    super(http, 'http://localhost:5298/api/Employee')
  }
}
