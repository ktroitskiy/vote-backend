import { Test, TestingModule } from '@nestjs/testing';
import { VoteVariantService } from '../vote-variant.service';

describe('VoteVariantService', () => {
  let service: VoteVariantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoteVariantService],
    }).compile();

    service = module.get<VoteVariantService>(VoteVariantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
