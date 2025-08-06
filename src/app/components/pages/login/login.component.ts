import { Component, inject } from '@angular/core';
import { BasePageComponent } from '../../../base-page.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InputTextModule, PasswordModule],
  templateUrl: './login.component.html',
})
export class LoginComponent extends BasePageComponent {
  private readonly formBuilder = inject(FormBuilder).nonNullable;
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  checkLogout() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('logout') && urlParams.get('logout') === 'true';
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userToLogin: Partial<User> = this.userForm.getRawValue();

    this.authService.login(userToLogin).subscribe({
      next: (response) => {
        this.router.navigate(['/dashboard'], {
          queryParams: { login: true },
        });
        this.userForm.reset();
      },
      error: (error) => console.error('Erreur lors de la connexion :', error),
    });
  }
}
