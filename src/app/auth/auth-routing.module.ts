import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AuthComponent }   from './auth.component'; 
import { ConfirmPasswordComponent }   from './confirm-password/confirm-password.component';
import { LoginComponent }             from './login/login.component';
import { ResetComponent }             from './reset/reset.component';
import { SignupComponent }             from './signup/signup.component';
 
const authRoutes: Routes = [
  { 
    path: 'auth', 
    component: AuthComponent,
    children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      { path: 'confirm-password', component: ConfirmPasswordComponent },
      { path: 'login',        component: LoginComponent },
      { path: 'reset',        component: ResetComponent },
      { path: 'signup',        component: SignupComponent },
    ]
  }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
