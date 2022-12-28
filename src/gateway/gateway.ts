import { Body, OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { LoginService } from 'src/users/services/login.service';
import { PlayerScoreService } from 'src/users/services/player-score.service';

@WebSocketGateway()
export class PlanningPokerGateway implements OnModuleInit {
  constructor(
    public loginService: LoginService,
    public playerScoreService: PlayerScoreService,
  ) {}
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');
    });
  }

  @SubscribeMessage('playerScore')
  onPlayerScore(@MessageBody() body: any) {
    this.playerScoreService.updatePlayerScore(body);
    const playerScores = this.playerScoreService.getPlayerScore();
    this.server.emit('onPlayerScore', playerScores);
  }

  @SubscribeMessage('isVisible')
  isVisible(@MessageBody() body: any) {
    this.server.emit('onVisible', { msg: 'New Message', content: body });
  }

  @SubscribeMessage('newUser')
  onNewUser(@MessageBody() body: any) {
    console.log('-------------creating new user---------------');
    const users = this.loginService.login(body);
    this.playerScoreService.updatePlayerScore(users);
    this.server.emit('onNewUser', users);
  }
}
