import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoteController } from './vote/vote.controller';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [VoteModule],
  controllers: [AppController, VoteController],
  providers: [AppService],
})
export class AppModule {}
