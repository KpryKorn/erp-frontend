import { Component, inject } from '@angular/core';
import { BasePageComponent } from '../../../base-page.component';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectModule } from 'primeng/select';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputTextModule, PasswordModule, SelectModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent extends BasePageComponent {
  private readonly formBuilder = inject(FormBuilder).nonNullable;
  private readonly authService = inject(AuthService);

  readonly ROLES = ['USER', 'ADMIN'];

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
  });

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userToRegister: User = this.userForm.getRawValue();

    this.authService.register(userToRegister).subscribe({
      next: (response) => {
        console.log('Inscription réussie !', response);
      },
      error: (error) => console.error("Erreur lors de l'inscription :", error),
    });
  }
}
