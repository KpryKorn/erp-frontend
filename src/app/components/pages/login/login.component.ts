import { Component, inject } from '@angular/core';
import { BasePageComponent } from '../../../base-page.component';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent extends BasePageComponent {
  private readonly formBuilder = inject(FormBuilder).nonNullable;
  private readonly authService = inject(AuthService);

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}
