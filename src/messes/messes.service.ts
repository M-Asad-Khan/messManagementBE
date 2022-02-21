import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessDto, CreateWeeklyMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';
import { Mess } from './entities/mess.entity';
import { WeeklyMenu } from './entities/weekly-mess.entity';

@Injectable()
export class MessesService {
  constructor(
    @InjectRepository(Mess) private readonly messRepository: Repository<Mess>,
    @InjectRepository(WeeklyMenu)
    private readonly weeklyMessRepository: Repository<WeeklyMenu>,
  ) {}
  async create(createMessDto: CreateMessDto) {
    const mess = await this.messRepository.create(createMessDto);
    return this.messRepository.save(mess);
  }

  findAll() {
    return this.messRepository.find();
  }

  async findOne(id: number) {
    const user = await this.messRepository.findOne(id);
    if (!user) {
      const message = { error: `User #${id} not found` };
      throw new NotFoundException(message);
    }
    return user;
  }

  async update(id: number, updateMessDto: UpdateMessDto) {
    const messRecord = await this.messRepository.preload({
      id: id,
      ...updateMessDto,
    });

    if (!messRecord) {
      const message = { error: `User #${id} not found` };
      throw new NotFoundException(message);
    }
    return this.messRepository.save(messRecord);
  }

  async remove(id: number) {
    const user = await this.messRepository.findOne(id);
    if (!user) {
      const message = { error: `User #${id} not found` };
      throw new NotFoundException(message);
    }
    return this.messRepository.remove(user);
  }
  async createWeeklyMenu(createMenu: CreateWeeklyMessDto) {
    const menu = await this.weeklyMessRepository.create(createMenu);
    return this.weeklyMessRepository.save(menu);
  }
  async findWeeklyMenuList() {
    return this.weeklyMessRepository.find();
  }
  async removeMenuFromList(id: number) {
    const menu = await this.weeklyMessRepository.findOne(id);
    if (!menu) {
      const message = { error: `Menu #${id} not found` };
      throw new NotFoundException(message);
    }
    return this.weeklyMessRepository.remove(menu);
  }
}
