import { Injectable } from '@nestjs/common';

import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  create(dto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return `This action returns all comments`;
  }

  public async deleteAllCommentsForArticles(articleId: string) {}
}
