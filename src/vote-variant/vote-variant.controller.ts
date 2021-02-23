import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { VoteVariantService } from './vote-variant.service';
import { VoteVariant, Prisma } from '@prisma/client';

@Controller('vote-variant')
export class VoteVariantController {
  constructor(private voteVariantService: VoteVariantService) {}

  @Get()
  async findAllVoteVariants(): Promise<VoteVariant[]> {
    return this.voteVariantService.voteVariants({});
  }

  @Get(':id')
  async getVoteVariantById(@Param('id') id: string): Promise<VoteVariant> {
    return this.voteVariantService.voteVariant({ id });
  }

  @Post()
  async createVoteVariant(@Body() data: Prisma.VoteVariantCreateInput): Promise<VoteVariant> {
    console.log(data);
    return this.voteVariantService.createVoteVariant(data);
  }

  @Delete(':id')
  async deleteVoteVariant(@Param('id') id: string): Promise<VoteVariant> {
    return this.voteVariantService.deleteVoteVariant({ id });
  }
}
