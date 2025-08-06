import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { environment } from '../../environment';
import { tap } from 'rxjs';
import { AuthResponse } from '../../models/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = environment.apiUrl;

  _isLoggedIn = signal<boolean>(!!this.getAccessToken());
  isLoggedIn = this._isLoggedIn.asReadonly();

  register(user: User) {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/register`, user)
      .pipe(
        tap((response) => {
          this.saveTokensAndLogin(response);
        })
      );
  }

  login(user: Partial<User>) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, user).pipe(
      tap((response) => {
        this.saveTokensAndLogin(response);
      })
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem('acces_token');
  }

  logout() {
    localStorage.removeItem('acces_token');
    localStorage.removeItem('refresh_token');

    this._isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }

  /**
   * Méthode privée pour centraliser la logique de sauvegarde des tokens
   * et de mise à jour de l'état de connexion.
   */
  private saveTokensAndLogin(response: AuthResponse): void {
    localStorage.setItem('acces_token', response.accessToken);
    localStorage.setItem('refresh_token', response.refreshToken);
    this._isLoggedIn.set(true);
  }
}
