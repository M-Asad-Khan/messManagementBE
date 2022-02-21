import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MessesService } from './messes.service';
import { CreateMessDto, CreateWeeklyMessDto } from './dto/create-mess.dto';
import { UpdateMessDto } from './dto/update-mess.dto';

@Controller('messes')
export class MessesController {
  constructor(private readonly messesService: MessesService) {}

  @Post()
  create(@Body() createMessDto: CreateMessDto) {
    return this.messesService.create(createMessDto);
  }

  @Get()
  findAll() {
    return this.messesService.findAll();
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string) {
    return this.messesService.findOne(+id);
  }

  @Patch('/user/:id')
  update(@Param('id') id: string, @Body() updateMessDto: UpdateMessDto) {
    return this.messesService.update(+id, updateMessDto);
  }

  @Delete('/user/:id')
  remove(@Param('id') id: string) {
    return this.messesService.remove(+id);
  }
  @Post('addMenu')
  createWeeklyMenu(@Body() createMenu: CreateWeeklyMessDto) {
    return this.messesService.createWeeklyMenu(createMenu);
  }
  @Get('menuList')
  getAllWeeklyMenuList() {
    return this.messesService.findWeeklyMenuList();
  }
  @Delete(':id/menu')
  removeMenuFromList(@Param('id', ParseIntPipe) id: number) {
    return this.messesService.removeMenuFromList(id);
  }
}
