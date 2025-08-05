import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  readonly apiUrl = environment.apiUrl;

  register(user: User) {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }
}
