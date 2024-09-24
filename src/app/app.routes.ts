import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './component/home/home.component';
import { loginGuard } from './login.guard';

export const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [loginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [loginGuard] },
  { path: 'log-in', component: LoginComponent },
];
