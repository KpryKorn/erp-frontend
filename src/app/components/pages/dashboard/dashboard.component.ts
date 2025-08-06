import { Component, inject, OnInit, signal } from '@angular/core';
import { BasePageComponent } from '../../../base-page.component';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends BasePageComponent implements OnInit {
  private readonly userService = inject(UserService);

  users = signal<User[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.loading.set(true);
    this.error.set(null);

    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users.set(response);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set('Erreur lors de la récupération des utilisateurs');
        this.loading.set(false);
        console.error('User fetch error:', error);
      },
    });
  }
}
