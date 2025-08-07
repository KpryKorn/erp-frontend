import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule, PopoverModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  authService = inject(AuthService);
  userService = inject(UserService);

  currentUser = this.userService.currentUserData;

  getTodaysDate() {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  getFirstLetter(string: string) {
    return string.charAt(0);
  }

  logout() {
    this.authService.logout();
  }
  title = 'ERP';
}
