import { Injectable } from '@nestjs/common';
import { LoginService } from './login.service';

@Injectable()
export class PlayerScoreService {
  constructor(public loginService: LoginService) {}

  playersScore = [];

  public updatePlayerScore(request) {
    console.log('-------------updating player score---------------');
    this.playersScore.push(request);
    const uuid = this.playersScore.map((element) => element.id);
    const index = this.playersScore
      .map((element) => element.id)
      .indexOf(request.id);
    for (let i = 0; i < uuid.length; i++) {
      for (let j = i; j < uuid.length; j++) {
        if (uuid[i] === uuid[j + 1]) {
          this.playersScore.splice(i, 1);
        }
      }
    }
    console.log(this.playersScore);
  }

  public getPlayerScore() {
    return this.playersScore;
  }
}
