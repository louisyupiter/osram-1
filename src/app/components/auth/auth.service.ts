import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:4000/users/';
  constructor(private http: HttpClient) { }

  userValidate(user: User): Observable<any[]> {
    return this.http.post<any>(`${environment.baseUrl}user/login`, user);
  }

  signIn(user: any): any {
    return this.http.post<any>(`${this.api}authenticate`, user);
  }

  public isLoggedIn(): any {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  public logout(): any {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
