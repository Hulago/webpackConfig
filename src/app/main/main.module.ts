import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, HomeComponent],
  providers: [/* TODO: Providers go here */],
})
export class MainModule { }
