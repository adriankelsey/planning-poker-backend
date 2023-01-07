import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { PlayerScoreService } from './services/player-score.service';

@Controller({ path: 'users' })
export class UsersController {
  constructor(
    private loginService: LoginService,
    private playerScoreService: PlayerScoreService,
  ) {}
  players = [];
  playersState = [];
  isDuplicate = [];

  @Post()
  login(@Body() request) {
    this.loginService.login(request);
  }

  @Get()
  getUsers() {
    return this.loginService.getUsers();
  }

  @Post('/playerScores')
  postState(@Body() request) {
    console.log('posting player scores');
    this.playerScoreService.postPreviousPlayerScores(request);
    console.log(this.playerScoreService.getPreviousPlayersScores());
  }

  @Get('/playerScores')
  getState() {
    return this.playerScoreService.getPreviousPlayersScores();
  }
}
