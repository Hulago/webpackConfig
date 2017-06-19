// import 'element-ui/lib/theme-default/index.css'

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Error404Component } from './shared/error-404/error-404.component'
import {BrowserModule} from '@angular/platform-browser';
import {MainRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}



