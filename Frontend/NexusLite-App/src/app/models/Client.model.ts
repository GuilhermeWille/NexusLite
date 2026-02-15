import { IEntity } from './IEntity.model';

export class Client implements IEntity {
  constructor(
    public id: number = 0,
    public name: string = '',
    public contactNumber: string = '',
    public address: string = ''
  ) { }

  getSummary(): string {
    return `Cliente #${this.id}: ${this.name}`;
  }
}
