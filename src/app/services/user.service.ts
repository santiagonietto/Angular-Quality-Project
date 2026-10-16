import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel, LoginResponse } from '../models/login-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Base del backend .NET. Ajustar puerto/ruta cuando se confirme el backend.
  private readonly apiUrl = 'http://localhost:5000';
  private readonly http = inject(HttpClient);

  login(model: LoginModel): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/User/login`, model);
  }
}
