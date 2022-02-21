import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserAttendanceDto as CreateUserAttendanceDto } from './dto/createPerDayUnit.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserAttendance } from './entities/userAttendance';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepositry: Repository<User>,
    @InjectRepository(UserAttendance)
    private readonly userAttendanceRepository: Repository<UserAttendance>,
  ) {}

  async finAll() {
    return this.usersRepositry.find();
  }
  async findOne(username: string, password: string) {
    const user = await this.usersRepositry.findOne({ username });
    if (user && user.password === password) {
      return user;
    } else {
      const message = { error: `User name and password not found ` };
      throw new NotFoundException(message);
    }
  }
  async findById(id: number) {
    const user = await this.usersRepositry.findOne(id);
    if (!user) {
      const message = { error: `User #${id} not found` };
      throw new NotFoundException(message);
    }
    return user;
  }
  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const coffee = this.usersRepositry.create(createUserDto);
    return this.usersRepositry.save(coffee).catch((e) => {
      if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
        const message = { error: 'Account with this email already exists.' };
        throw new BadRequestException(message);
      }
      return e.driverError.detail;
    });
  }
  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    const user = await this.usersRepositry.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      const message = { error: `User #${id} not found` };
      throw new NotFoundException(message);
    }
    return this.usersRepositry.save(user);
  }

  async removeById(id: number) {
    const user = await this.usersRepositry.findOne(id);
    if (!user) {
      const message = { error: `User #${id} not found` };
      throw new NotFoundException(message);
    }
    return this.usersRepositry.remove(user);
  }
  async addDeposits(id: number, balance: number, type: string) {
    const user = await this.usersRepositry.findOne(id);
    if (type === 'Individual') {
      const addBalance = await this.usersRepositry.preload({
        id,
        IndividualDeposit: balance,
        totalDeposit: user.devboxDeposit + balance,
        Balance: user.Balance + balance,
        cashInHand: user.cashInHand + balance,
      });
      if (!addBalance) {
        const message = { error: `User #${id} not found` };
        throw new NotFoundException(message);
      }
      return this.usersRepositry.save(addBalance);
    } else {
      const addBalance = await this.usersRepositry.preload({
        id,
        devboxDeposit: balance,
        totalDeposit: user.IndividualDeposit + balance,
        Balance: user.Balance + balance,
        cashInHand: user.cashInHand + balance,
      });
      if (!addBalance) {
        const message = { error: `User #${id} not found` };
        throw new NotFoundException(message);
      }
      return this.usersRepositry.save(addBalance);
    }
  }

  async dailyMessCharges(
    id: number,
    unit: number,
    dishName: string,
    date: Date,
    name: string,
  ) {
    const perDayMess = await this.userAttendanceRepository.create({
      id: id,
      perDayCharge: unit,
      menuName: dishName,
      messDate: date,
      name: name,
    });
    const user = await this.usersRepositry.findOne(id);
    const addBalance = await this.usersRepositry.preload({
      id,
      Balance: user.Balance - unit,
      Expanses: user.Expanses + unit,
      cashInHand: user.cashInHand - unit,
    });
    if (!addBalance) {
      const message = { error: `User #${id} not found` };
      throw new NotFoundException(message);
    }
    await this.usersRepositry.save(addBalance);
    return await this.userAttendanceRepository.save(perDayMess);
  }

  async dailyMessReport() {
    return this.userAttendanceRepository.find();
  }
}
