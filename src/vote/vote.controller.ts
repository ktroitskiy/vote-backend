import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('vote')
export class VoteController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);

    return '200';
  }
}
