import * as _ from 'lodash';

export interface IUserState {
  currentUser: IUser
}

export interface IUserSession {
  token: string;
  expireDate: Date;
}

export interface IUser {
  username: string;
  password: string;
  session?: IUserSession
}

export class User implements IUser {

  public username: string; 
  public password: string;
  public session?: IUserSession

  constructor(user: IUser) {
    this.username = _.get(user, 'username', undefined);
    this.password = _.get(user, 'password', undefined);
    this.session = _.get(user, 'session', null);
  }
  
}