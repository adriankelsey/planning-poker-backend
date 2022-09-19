import { Body, Controller, Get, Post } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


   players = []

   playersState = []

   isDuplicate = []

  @Post('/login')
  login(@Body() request) {
    this.players.push(request)
    console.log(this.players)
  }

  @Get('/users')
  getUsers() {
    return this.players
  }

  @Post('/state')
  postState(@Body() request) {
    this.playersState.push(request)
    const uuid = this.playersState.map(element => element.uuid)
    const index = this.playersState.map(element => element.uuid).indexOf(request.uuid)
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
