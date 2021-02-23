import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { Vote, Prisma } from '@prisma/client';
import { VoteWithVatiants } from './vote.interfaces';
import { VoteService } from './vote.service';

@Controller('vote')
export class VoteController {
  constructor(private voteService: VoteService) {}

  @Get()
  async findAllVotes(): Promise<VoteWithVatiants[]> {
    return this.voteService.votes({});
  }

  @Get(':id')
  async getVoteById(@Param('id') id: string): Promise<VoteWithVatiants> {
    return this.voteService.vote({ id });
  }

  @Post()
  async createVote(@Body() data: Prisma.VoteCreateInput): Promise<Vote> {
    console.log(data);
    return this.voteService.createVote(data);
  }

  @Delete(':id')
  async deleteVote(@Param('id') id: string): Promise<Vote> {
    return this.voteService.deleteVote({ id });
  }
}
