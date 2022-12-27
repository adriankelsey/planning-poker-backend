import { Module } from '@nestjs/common';
import { LoginService } from 'src/users/services/login.service';
import { PlayerScoreService } from 'src/users/services/player-score.service';
import { PlanningPokerGateway } from './gateway';

@Module({
  providers: [PlanningPokerGateway, LoginService, PlayerScoreService],
})
export class PlanningPokerGatewayModule {}
