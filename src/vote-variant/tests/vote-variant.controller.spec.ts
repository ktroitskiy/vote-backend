import { Test, TestingModule } from '@nestjs/testing';
import { VoteVariantController } from '../vote-variant.controller';

describe('VoteVariantController', () => {
  let controller: VoteVariantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoteVariantController],
    }).compile();

    controller = module.get<VoteVariantController>(VoteVariantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
