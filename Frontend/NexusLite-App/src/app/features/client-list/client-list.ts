import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client.model';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../baseComponent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css',
})

export class ClientList extends BaseComponent<Client> implements OnInit {
  constructor(protected clientService: ClientService) {
    super(clientService);
  }
}
