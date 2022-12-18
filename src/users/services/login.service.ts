import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  constructor() {}

  users = [];

  public login(request) {
    this.users.push(request);
    return this.users;
  }

  public getUsers() {
    return this.users;
  }
}
