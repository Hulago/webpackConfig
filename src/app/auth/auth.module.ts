import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }


import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-routing.module'; //TODO: Create app.routing

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  
    AuthRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [/* TODO: Providers go here */],
  bootstrap: [AppComponent],
})
export class AppModule { }
