import { Controller, Get, Req } from '@nestjs/common';
import { Vote } from '@prisma/client';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('vote')
export class VoteController {
  @Get()
  findAll(@Req() request: Request): string {

    return '200';
  }
}
