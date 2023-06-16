import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {

  private url = 'http://localhost:4000/api/';

  nombreUsuario: string = 'Sin Nombre.....!!!'

  constructor(private http: HttpClient) {
  }

  agregarUser(Usuario: any): Observable<any> {
    return this.http.get(this.url);
  }

  guardarUser(user: any): Observable<any> {
    return this.http.post(this.url + '/login', user)
  }

  Connected() {
    return !!localStorage.getItem('token');
  }

}
