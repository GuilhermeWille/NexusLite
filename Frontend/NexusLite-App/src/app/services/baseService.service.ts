import { HttpClient } from '@angular/common/http';
import { IEntity } from '../models/IEntity.model';
import { Observable, of, catchError } from 'rxjs';
import { MOCK_DATA } from './mock-data';

export abstract class BaseService<T extends IEntity> {

  constructor(
    protected http: HttpClient,
    public apiUrl: string = '' // 🚨 Adicionamos o segundo argumento opcional aqui
  ) { }

  listAll(endpoint: string): Observable<T[]> {
    const url = `http://localhost:5298/api/${endpoint}`;

    return this.http.get<T[]>(url).pipe(
      catchError(error => {
        console.warn(`Backend Offline. Ativando Modo Demo para: ${endpoint}`);
        return of(MOCK_DATA[endpoint] || []);
      })
    );
  }

  postEntity(entity: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, entity);
  }

  putEntity(entity: T): Observable<T> {
    const id = entity.id || (entity as any).Id;
    return this.http.put<T>(`${this.apiUrl}/${id}`, entity);
  }

  deleteEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
