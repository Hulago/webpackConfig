import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class DetailResolver implements Resolve<any> {
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return 'Some data to be resolved';
  }

  constructor() { }
}