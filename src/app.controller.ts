import { Body, Controller, Get, Post } from '@nestjs/common';
import { threadId } from 'worker_threads';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}
}
