import { Body, Controller, Get, Post } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
   players = []
   playersState = []
   isDuplicate = []

  @Post('/login')
  login(@Body() request) {
    this.players.push(request)
  }

  @Get('/users')
  getUsers() {
    return this.players
  }

  @Post('/state')
  postState(@Body() request) {
    this.playersState.push(request)
    const uuid = this.playersState.map(element => element.id)
    const index = this.playersState.map(element => element.id).indexOf(request.id)
    for(let i = 0; i < uuid.length; i++) {
      for(let j = i; j < uuid.length; j++) {
        if(uuid[i] === uuid[j + 1]) {
          this.playersState.splice(i, 1)
        }
      }
    }
  }

  @Get('/state')
  getState() {
    return this.playersState
  }
}
