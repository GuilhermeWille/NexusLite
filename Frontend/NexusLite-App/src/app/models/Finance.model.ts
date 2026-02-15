import { IEntity } from './IEntity.model';

export class Finance implements IEntity {
  constructor(
    public id: number = 0,
    public description: string = '',
    public date: string = '',
    public value: number = 0,
    public isIncome: boolean = true,
  ) { }

  getSummary(): string {
    if (!this.isIncome) {
      return `Valor #${this.description}: - ${this.value}`;
    }
    return `Valor #${this.description}: + ${this.value}`;
  }
}
