import { Module } from '@nestjs/common';
import { MessesService } from './messes.service';
import { MessesController } from './messes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mess } from './entities/mess.entity';
import { WeeklyMenu } from './entities/weekly-mess.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mess, WeeklyMenu])],
  controllers: [MessesController],
  providers: [MessesService],
})
export class MessesModule {}
