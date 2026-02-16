import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService.service';
import { Budget } from '../models/Budget.model'

@Injectable({
  providedIn: 'root',
})

export class Budgetervice extends BaseService<Budget> {
  constructor(protected override http: HttpClient) {
    super(http, 'http://localhost:5298/api/Budgets')
  }
}
