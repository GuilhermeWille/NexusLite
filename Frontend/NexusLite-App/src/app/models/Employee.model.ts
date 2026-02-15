import { IEntity } from './IEntity.model';

export class Employee implements IEntity {
  constructor(
    public id: number = 0,
    public name: string = '',
    public functio: string = '',
    public salary: number = 0

  ) { }
  getSummary(): string {
    return `Employee #${this.id}: \n Name: ${this.name} \n Function: ${this.functio} \n Salary: ${this.salary}`
  }
}
