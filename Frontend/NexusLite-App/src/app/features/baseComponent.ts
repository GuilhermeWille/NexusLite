import { OnInit, Directive } from '@angular/core';
import { BaseService } from '../services/baseService.service';
import { IEntity } from '../models/IEntity.model';

@Directive()
export abstract class BaseComponent<T extends IEntity> implements OnInit {

  public items: T[] = [];
  public selectedItem: any = { id: 0 };
  public sidebarCollapsed = false;
  public formVisible = false;

  constructor(protected service: BaseService<T>) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.listAll().subscribe({
      next: (res) => this.items = res,
      error: (err) => console.error('Erro ao carregar lista:', err)
    });
  }

  delete(id: number) {
    if (confirm('Deseja realmente excluir?')) {
      this.service.deleteEntity(id).subscribe({
        next: () => this.items = this.items.filter(i => i.id !== id)
      });
    }
  }

  save() {
    const operation = this.selectedItem.id === 0
      ? this.service.postEntity(this.selectedItem)
      : this.service.putEntity(this.selectedItem);

    operation.subscribe({
      next: () => {
        this.loadData();
        this.clearEntity();
        this.formVisible = false;
      }
    });
  }

  editItem(item: T) {
    this.selectedItem = { ...item };
    this.formVisible = true;
  }

  clearEntity() {
    this.selectedItem = { id: 0 };
  }

  pid(id: any) {
    return id ? id.toString().padStart(4, '0') : '0000';
  }

  newRecord() {
    this.clearEntity();
    this.formVisible = true;
  }
}
