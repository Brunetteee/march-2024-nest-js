import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ArticlesService } from './articles.service';
import { CreateArticlesDto } from './dto/create-articles.dto';
import { UpdateArticlesDto } from './dto/update-articles.dto';

@ApiBearerAuth()
@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly usersService: ArticlesService) {}

  @Post()
  create(@Body() dto: CreateArticlesDto) {
    return this.usersService.create(dto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateArticlesDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
