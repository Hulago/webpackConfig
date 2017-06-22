import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Error404Component } from './shared/error-404/error-404.component'
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module'
import {CoreModule} from './core/core.module'

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}



