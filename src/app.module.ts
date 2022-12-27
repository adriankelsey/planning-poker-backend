import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanningPokerGatewayModule } from './gateway/gateway.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PlanningPokerGatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
