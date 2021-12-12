import { IsNotEmpty, IsString } from "class-validator";

export class UsersCreateDto {

  @IsString()
  @IsNotEmpty()
  username: string
}
