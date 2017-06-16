// import 'element-ui/lib/theme-default/index.css'

import { Component, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'router-app',
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        Navs
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">
      <hr>
      <h1>Contents</h1>
    </div>
  </div>
  `
})
class RoutesDemoApp {
}

@NgModule({
  declarations: [
    RoutesDemoApp
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [ RoutesDemoApp ]
})
class RoutesDemoAppModule {}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
  .catch((err: any) => console.error(err));


