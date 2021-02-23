import { Injectable } from '@nestjs/common';
import { VoteVariant, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllVotesParams, UpdateVoteVariantParams } from './vote-vatiant.interfaces';


@Injectable()
export class VoteVariantService {
  constructor(private prisma: PrismaService) {}

  async voteVariant(voteWhereUniqueInput: Prisma.VoteVariantWhereUniqueInput): Promise<VoteVariant | null> {
    return this.prisma.voteVariant.findUnique({
      where: voteWhereUniqueInput,
    });
  }

  async voteVariants(params: GetAllVotesParams): Promise<VoteVariant[]> {
    return this.prisma.voteVariant.findMany(params);
  }

  async createVoteVariant(data: Prisma.VoteVariantCreateInput): Promise<VoteVariant> {
    return this.prisma.voteVariant.create({ data });
  }

  async updateVoteVariant(params: UpdateVoteVariantParams): Promise<VoteVariant> {
    return this.prisma.voteVariant.update(params);
  }

  async deleteVoteVariant(where: Prisma.VoteVariantWhereUniqueInput): Promise<VoteVariant> {
    return this.prisma.voteVariant.delete({ where });
  }
}
