import { Component } from '@angular/core';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AuthComponent } from './auth.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';

import { AuthRoutingModule } from './auth-routing.module'; //TODO: Create app.routing

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    ConfirmPasswordComponent,
    LoginComponent,
    ResetComponent,
    SignupComponent
  ],
  providers: [/* TODO: Providers go here */],
})
export class AuthModule { }
