import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { LoginModel } from '../../models/login-model';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginForm: FormGroup;
  errorMessage = '';
  token = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const model = this.loginForm.value as LoginModel;
    this.userService.login(model).subscribe({
      next: (res) => {
        this.token = res.token;
      },
      error: (err) => {
        this.token = '';
        this.errorMessage =
          err?.status === 401
            ? 'Credenciales incorrectas. Verifica email y password.'
            : 'No se pudo iniciar sesión. Intenta de nuevo.';
      },
    });
  }
}
