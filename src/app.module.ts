import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VoteModule } from './vote/vote.module';
import { VoteVariantModule } from './vote-variant/vote-variant.module';

@Module({
  imports: [VoteModule, VoteVariantModule],
  providers: [PrismaService],
})
export class AppModule {}
