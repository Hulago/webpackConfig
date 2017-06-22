import { Component, OnInit } from '@angular/core';
import {NotificationService} from 'app/core/notification.service'

@Component({
  selector: 'app-main-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  constructor(private notificationService: NotificationService) { }

  ngOnInit() { 
    this.notificationService.info('init', 'init')
  }
}