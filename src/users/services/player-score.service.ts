import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class PlayerScoreService {
  constructor(public loginService: LoginService) {}

  previousPlayerScores: BehaviorSubject<any> = new BehaviorSubject([]);
  updatedPlayerScores = [];

  public updatePlayerScore(request) {
    this.updatedPlayerScores.push(request);
    const uuid = this.updatedPlayerScores.map((element) => element.id);
    const index = this.updatedPlayerScores
      .map((element) => element.id)
      .indexOf(request.id);
    for (let i = 0; i < uuid.length; i++) {
      for (let j = i; j < uuid.length; j++) {
        if (uuid[i] === uuid[j + 1]) {
          this.updatedPlayerScores.splice(i, 1);
        }
      }
    }
  }

  public getUpdatedPlayerScores() {
    return this.updatedPlayerScores;
  }

  public postPreviousPlayerScores(request) {
    this.previousPlayerScores.next(request);
  }

  public getPreviousPlayersScores() {
    return this.previousPlayerScores.getValue();
  }
}
