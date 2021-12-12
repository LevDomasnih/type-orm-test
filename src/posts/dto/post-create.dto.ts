import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PostCreateDto {

  @IsString()
  @IsNotEmpty()
  message: string

  @IsNotEmpty()
  @IsNumber()
  userId: number
}
