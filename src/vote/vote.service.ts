import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Vote, Prisma } from '@prisma/client';
import { VoteWithVatiants, GetAllVotesParams, UpdateVoteParams } from './vote.interfaces';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  async vote(voteWhereUniqueInput: Prisma.VoteWhereUniqueInput): Promise<VoteWithVatiants | null> {
    return this.prisma.vote.findUnique({
      where: voteWhereUniqueInput,
      include: {
        variants: true
      }
    });
  }

  async votes(params: GetAllVotesParams): Promise<VoteWithVatiants[]> {
    const findedVotes =  await this.prisma.vote.findMany({
      ...params,
      include: {
        variants: true
      }
    });

    findedVotes.forEach((vote, index) => {
      const count = vote.variants.reduce((prev, current) => {
        return prev += current.voteNumber;
      }, 0);

      findedVotes[index].allVotesCount = count;
    });

    return findedVotes;
  }

  async createVote(data: Prisma.VoteCreateInput): Promise<Vote> {
    return this.prisma.vote.create({ data });
  }

  async updateVote(params: UpdateVoteParams): Promise<Vote> {
    return this.prisma.vote.update(params);
  }

  async deleteVote(where: Prisma.VoteWhereUniqueInput): Promise<Vote> {
    return this.prisma.vote.delete({ where });
  }
}
