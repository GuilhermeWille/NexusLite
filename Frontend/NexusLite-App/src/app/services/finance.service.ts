import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService.service';
import { Finance } from '../models/Finance.model'

@Injectable({
  providedIn: 'root',
})

export class FinanceService extends BaseService<Finance> {
  constructor(protected override http: HttpClient) {
    super(http, 'http://localhost:5298/api/Finance')
  }
}

