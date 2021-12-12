import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersCreateDto } from "./dto/users-create.dto";

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService
  ) { }

  @Post()
  async createUser(@Body() dto: UsersCreateDto) {
    return this.userService.createUser(dto)
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers()
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id)
  }
}
