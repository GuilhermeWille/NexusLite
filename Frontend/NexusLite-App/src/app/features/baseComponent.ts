import { OnInit, Directive, ChangeDetectorRef, inject } from '@angular/core';
import { BaseService } from '../services/baseService.service';
import { IEntity } from '../models/IEntity.model';

@Directive()
export abstract class BaseComponent<T extends IEntity> implements OnInit {
  protected cdr = inject(ChangeDetectorRef);

  public items: T[] = [];
  public selectedItem: any = { id: 0 };
  public sidebarCollapsed = false;
  public formVisible = false;
  public activeSection = 'clients';

  private endpointMap: any = {
    'clients': 'Client',
    'employees': 'Employee',
    'finance': 'Finance',
    'budgets': 'Budget'
  };

  public titles: any = {
    'clients': 'Clientes',
    'finance': 'Financeiro',
    'employees': 'Funcionários',
    'budgets': 'Orçamentos'
  };

  public navItems = [
    { key: 'clients', label: 'Clientes', icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' },
    { key: 'employees', label: 'Funcionários', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
    { key: 'finance', label: 'Financeiro', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
    { key: 'budgets', label: 'Orçamentos', icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' }
  ];

  constructor(protected service: BaseService<T>) { }

  ngOnInit(): void {
    this.changeSection(this.activeSection);
  }

  changeSection(section: string) {
    this.activeSection = section;
    this.formVisible = false;
    this.items = [];
    this.selectedItem = { id: 0 };

    const endpoint = this.endpointMap[section];
    if (endpoint) {
      this.service.apiUrl = `http://localhost:5298/api/${endpoint}`;
      this.loadData();
    }
  }

  loadData() {
    const endpoint = this.endpointMap[this.activeSection];
    if (endpoint) {
      this.service.listAll(endpoint).subscribe({
        next: (res) => {
          this.items = res;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Erro:', err);
          this.cdr.detectChanges();
        }
      });
    }
  }

  delete(item: any) {
    const id = item.id || item.Id;
    if (id && confirm('Excluir?')) {
      this.service.deleteEntity(id).subscribe({
        next: () => {
          this.items = this.items.filter(i => (i.id || (i as any).Id) !== id);
          this.cdr.detectChanges();
        }
      });
    }
  }

  save() {
    const id = Number(this.selectedItem.id || this.selectedItem.Id || 0);
    const operation = id === 0
      ? this.service.postEntity(this.selectedItem)
      : this.service.putEntity(this.selectedItem);

    operation.subscribe({
      next: () => {
        this.loadData();
        this.clearEntity();
        this.cdr.detectChanges();
      }
    });
  }

  editItem(item: T) {
    this.selectedItem = { ...item };
    this.formVisible = true;
    this.cdr.detectChanges();
  }

  clearEntity() {
    this.selectedItem = { id: 0 };
    this.formVisible = false;
  }

  newRecord() {
    this.clearEntity();
    this.formVisible = true;
  }

  pid(id: any) {
    return id ? id.toString().padStart(4, '0') : '0000';
  }
}
