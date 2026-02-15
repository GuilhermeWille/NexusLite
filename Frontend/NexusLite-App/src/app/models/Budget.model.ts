import { IEntity } from './IEntity.model';

export class Budget implements IEntity {
  constructor(
    public id: number = 0,
    public clientId: number = 0,
    public materialCost: number = 0,
    public serviceCost: number = 0

  ) { }
  getSummary(): string{
    return `Client #${this.clientId}: \n Material Cost ${this.materialCost} \n Service Cost: ${this.serviceCost}`
  }
}
