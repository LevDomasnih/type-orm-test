import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostRepository } from "./post.repository";
import { UserRepository } from "../users/user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository, UserRepository])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
