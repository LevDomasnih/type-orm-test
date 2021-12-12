import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PostCreateDto } from "./dto/post-create.dto";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) { }

  @Post()
  async createPost(@Body() dto: PostCreateDto) {
    return this.postsService.createPost(dto)
  }

  @Get()
  async getPosts() {
    return this.postsService.getPosts()
  }

  @Get(':id')
  async getPostById(@Param('id') id: number) {
    return this.postsService.getPostById(id)
  }
}
