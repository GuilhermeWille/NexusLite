import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService.service';
import { Client } from '../models/Client.model'

@Injectable({
  providedIn: 'root',
})
export class ClientService extends BaseService<Client>{
  constructor(protected override http: HttpClient) {
    super(http, 'http://localhost:5298/api/Client')
  }
}
