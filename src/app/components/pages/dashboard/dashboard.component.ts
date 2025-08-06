import { Component, inject, OnInit } from '@angular/core';
import { BasePageComponent } from '../../../base-page.component';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends BasePageComponent implements OnInit {
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => console.log(response),
      error: (error) =>
        console.error(
          'Erreur lors de la récupération des utilisateurs :',
          error
        ),
    });
  }
}
