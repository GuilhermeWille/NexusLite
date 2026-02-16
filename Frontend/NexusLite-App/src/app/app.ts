import { Component, signal } from '@angular/core';
import { ClientList } from './features/client-list/client-list';

@Component({
  selector: 'app-root',
  imports: [ ClientList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NexusLite-App');
}
