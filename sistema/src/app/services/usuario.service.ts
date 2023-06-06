import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:4000/api/user';

  constructor(private http: HttpClient) { 

  }

  guardarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url + "/create", usuario);
  }

}
