import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000/api/usuarios/';

  constructor(private http: HttpClient) { 

  }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUser(user: Usuario): Observable<any> {
    return this.http.post(this.url, user);
  }

  viewUser(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarUser(id: string, user: Usuario): Observable<any> {
    return this.http.put(this.url + id, user);
  }

}
