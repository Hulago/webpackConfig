import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

import { DetailGuard } from './detail/detail.guard';
import { DetailResolver } from './detail/detail.resolver';

const mainRoutes: Routes = [
  { 
    path: 'main', 
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/main/home', pathMatch: 'full' },
      { path: 'detail/:id', component: DetailComponent, canActivate: [DetailGuard], resolve: {data: DetailResolver}  },
      { path: 'home', component: HomeComponent }
    ] 
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [DetailGuard, DetailResolver]
})
export class MainRoutingModule { }
