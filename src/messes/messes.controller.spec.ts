import { Test, TestingModule } from '@nestjs/testing';
import { MessesController } from './messes.controller';
import { MessesService } from './messes.service';

describe('MessesController', () => {
  let controller: MessesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessesController],
      providers: [MessesService],
    }).compile();

    controller = module.get<MessesController>(MessesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
