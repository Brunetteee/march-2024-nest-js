import { Injectable } from '@nestjs/common';

import { CommentsService } from '../comments/comments.service';
import { UsersService } from '../users/users.service';
import { CreateArticlesDto } from './dto/create-articles.dto';
import { UpdateArticlesDto } from './dto/update-articles.dto';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly userService: UsersService,
    private readonly commentsService: CommentsService,
  ) {}

  create(dto: CreateArticlesDto) {
    this.userService.checkAbilityToEditArticles('authorId', 'articleId');
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateArticlesDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.commentsService.deleteAllCommentsForArticles('articleId');
    return `This action removes a #${id} user`;
  }
}
