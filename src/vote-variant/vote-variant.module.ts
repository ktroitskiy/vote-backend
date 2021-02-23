import { Module } from '@nestjs/common';
import { VoteVariantService } from './vote-variant.service';
import { VoteVariantController } from './vote-variant.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VoteVariantController],
  providers: [VoteVariantService, PrismaService],
})
export class VoteVariantModule {}
