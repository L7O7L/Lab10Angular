import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {

  url = 'http://localhost:4000/api/user';

  constructor(private http: HttpClient) { 
     
  }

  login(user: Usuario): Observable<any>{

    return this.http.post(this.url, user)

  }

  getToken() {

    return localStorage.getItem('token');

  }

  signInUser(){ 

    return !!localStorage.getItem('token');

  }

  createUser(user: Usuario): Observable<any>{

    return this.http.post(this.url + "/create", user);

  }

}
