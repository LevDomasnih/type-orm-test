import { Injectable } from '@nestjs/common';
import { UserRepository } from "./user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersCreateDto } from "./dto/users-create.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) { }

  async createUser(dto: UsersCreateDto) {
    const user = await this.userRepository.create(dto)
    return this.userRepository.save(user)
  }

  async getUserById(id: number) {
    return this.userRepository.findOneOrFail(id, {relations: ['posts']})
  }

  async getUsers() {
    return this.userRepository.find({relations: ['posts']})
  }
}
