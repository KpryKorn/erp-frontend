import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { environment } from '../../environment';
import { tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  private readonly _currentUserData = signal<User | null>(null);
  readonly currentUserData = computed(() => this._currentUserData());

  getAllUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getCurrentUser() {
    if (this.currentUserData() !== null) {
      return of(this.currentUserData());
    }

    return this.http.get<User>(`${this.apiUrl}/users/me`).pipe(
      tap((user) => {
        this._currentUserData.set(user);
      })
    );
  }

  clearCurrentUser() {
    this._currentUserData.set(null);
  }
}
