import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEntity } from '../models/IEntity.model';

export abstract class BaseService<T extends IEntity> {

  constructor(
    protected http: HttpClient,
    protected apiUrl: string
  ) { }

  listAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  postEntity(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, entity);
  }

  putEntity(entity: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${entity.id}`, entity);
  }

  deleteEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
