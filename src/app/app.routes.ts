import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { User } from './user/user';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'registro', component: User },
  { path: '**', redirectTo: 'dashboard' },
];
