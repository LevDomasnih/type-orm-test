import { Injectable } from '@nestjs/common';
import { PostRepository } from "./post.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { PostCreateDto } from "./dto/post-create.dto";
import { UserRepository } from "../users/user.repository";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) { }

  async createPost(dto: PostCreateDto) {
    const user = await this.userRepository.findOne(dto.userId)

    const createPost = await this.postRepository.create({
      message: dto.message,
      owner: user
    })

    return this.postRepository.save(createPost)
  }

  async getPosts() {
    return this.postRepository.find({relations: ['owner']})
  }

  async getPostById(id: number) {
    return this.postRepository.findOneOrFail(id ,{relations: ['owner']})
  }
}
