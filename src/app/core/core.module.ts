import { NgModule } from '@angular/core';

import * as iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { IZITOAST_TOKEN, NotificationService } from './notification.service'

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    { provide: IZITOAST_TOKEN, useValue: iziToast },
    NotificationService
  ],
})
export class CoreModule { }
