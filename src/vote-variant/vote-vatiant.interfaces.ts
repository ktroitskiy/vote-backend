import { Prisma } from '@prisma/client';
import { GetAllParams } from 'src/types/getAllParams';

export interface GetAllVotesParams extends GetAllParams {
  cursor?: Prisma.VoteVariantWhereUniqueInput;
  where?: Prisma.VoteVariantWhereInput;
  orderBy?: Prisma.VoteVariantOrderByInput;
}

export interface UpdateVoteVariantParams {
  where: Prisma.VoteVariantWhereUniqueInput;
  data: Prisma.VoteVariantUpdateInput;
}