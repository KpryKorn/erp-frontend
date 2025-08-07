import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  userService = inject(UserService);

  private init(): void {
    if (this.authService.isLoggedIn()) {
      this.userService.getCurrentUser().subscribe();
    }
  }

  ngOnInit(): void {
    this.init();
  }
}
