import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserAttendanceDto } from './dto/createPerDayUnit.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/all')
  findAll() {
    return this.userService.finAll();
  }
  //user Post/login route
  @Post('login')
  login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.userService.findOne(username, password);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post(':id/deposit')
  addDeposits(
    @Param('id', ParseIntPipe) id: number,
    @Body('Balance', ParseIntPipe) balance: number,
    @Body('type') type: string,
  ) {
    console.log(balance);
    return this.userService.addDeposits(id, balance, type);
  }
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.userService.findById(id);
  }
  @Patch(':id')
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeById(id);
  }
  @Post(':id/perDayUnit')
  dailyMessCharges(
    @Param('id', ParseIntPipe) id: number,
    @Body('unit', ParseIntPipe) unit: number,
    @Body('dishName') dishName: string,
    @Body('date') date: Date,
    @Body('name') name: string,
  ) {
    return this.userService.dailyMessCharges(id, unit, dishName, date, name);
  }
  @Get()
  messReport() {
    return this.userService.dailyMessReport();
  }
}
