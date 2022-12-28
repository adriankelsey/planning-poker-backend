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
    const uuid = this.webSocketUsers.map((element) => element.id);
    for (let i = 0; i < uuid.length; i++) {
      for (let j = i; j < uuid.length; j++) {
        if (uuid[i] === uuid[j + 1]) {
          this.webSocketUsers.splice(i, 1);
          this.axiosPostUsers.splice(i, 1);
        }
      }
    }
    return this.webSocketUsers;
  }

  public getUsers() {
    return this.axiosPostUsers;
  }
}
