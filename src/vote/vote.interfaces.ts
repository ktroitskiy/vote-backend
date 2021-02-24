import { Vote, VoteVariant, Prisma } from '@prisma/client';
import { GetAllParams } from 'src/types/getAllParams';

export interface VoteWithVatiants extends Vote {
  allVotesCount: number;
  variants: VoteVariant[];
}

export interface GetAllVotesParams extends GetAllParams {
  cursor?: Prisma.VoteWhereUniqueInput;
  where?: Prisma.VoteWhereInput;
  orderBy?: Prisma.VoteOrderByInput;
}

export interface UpdateVoteParams {
  where: Prisma.VoteWhereUniqueInput;
  data: Prisma.VoteUpdateInput;
}