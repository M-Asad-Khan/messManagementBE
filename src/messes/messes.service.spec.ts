import { Test, TestingModule } from '@nestjs/testing';
import { MessesService } from './messes.service';

describe('MessesService', () => {
  let service: MessesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessesService],
    }).compile();

    service = module.get<MessesService>(MessesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
