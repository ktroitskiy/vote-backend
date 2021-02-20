import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VoteController } from './vote/vote.controller';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [VoteModule],
  controllers: [VoteController],
  providers: [PrismaService],
})
export class AppModule {}
