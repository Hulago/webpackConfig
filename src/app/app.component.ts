// import 'element-ui/lib/theme-default/index.css'

import { Component } from '@angular/core';

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
export class AppComponent {
}