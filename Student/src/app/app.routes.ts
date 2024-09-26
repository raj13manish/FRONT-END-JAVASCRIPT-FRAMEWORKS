import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  
  { path: 'parent', component: ParentComponent },
  { path: '', component: LoginComponent },  // Default path for login

];