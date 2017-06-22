

import {Injectable, OpaqueToken, Inject} from '@angular/core'

export const IZITOAST_TOKEN = new OpaqueToken('izitoast');

interface Iizitoast {
  info(title: string, message: string, iconText: string);   
  success(title: string, message: string, iconText: string);   
  warning(title: string, message: string, iconText: string);  
  error(title: string, message: string, iconText: string);
}

interface INotificationSettings {
    timeout?: number,
    resetOnHover?: boolean,
    icon?: string,
    transitionIn?: string,
    transitionOut?: string
}

@Injectable()
export class NotificationService {

  private options: INotificationSettings;
  
  constructor(@Inject(IZITOAST_TOKEN) private iziToast: Iizitoast) {

      this.options = {
        timeout: 2000,
        resetOnHover: false,
        icon: 'material-icons',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX'
      }

  }

  setOptions(options: INotificationSettings = {}) {

      this.options = {
        ...this.options,
        ...options
      }
    
  }

  info(title: string, message: string, icon: string = 'info') {
    this.notify('info', title, message, icon);
  }

  success(title: string, message: string, icon: string = 'check') {
    this.notify('success', title, message, icon);
  }

  warning(title: string, message: string, icon: string = 'warning') {
    this.notify('warning', title, message, icon);
  }

  error(title: string, message: string, icon: string = 'error') {
    this.notify('error', title, message, icon);
  }

  notify(type: string, title: string, message: string, icon: string) {
    this.iziToast[type]({
      title,
      message,
      iconText: icon,
      ...this.options
    });
  }

}
