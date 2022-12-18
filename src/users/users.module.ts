import { Module } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { PlayerScoreService } from './services/player-score.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, LoginService, PlayerScoreService],
})
export class UsersModule {}
