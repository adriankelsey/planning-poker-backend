import { Injectable } from '@nestjs/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor() {}

  // implemented 2 different arrays here because I wasn't able to use the one across the getUsers() method.
  // intentially i wanted to use a get request to retrieve the same array so that the data can persist when refreshing the page on frontend.

  axiosPostUsers = [];
  webSocketUsers = [];

  public login(request) {
    this.webSocketUsers.push(request);
    this.axiosPostUsers.push(request);
    return this.webSocketUsers;
  }

  public getUsers() {
    return this.axiosPostUsers;
  }
}
