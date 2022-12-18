import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerScoreService {
  constructor() {}

  playersScore = [];

  public updatePlayerScore(request) {
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
  }

  public getPlayerScore() {
    return this.playersScore;
  }
}
