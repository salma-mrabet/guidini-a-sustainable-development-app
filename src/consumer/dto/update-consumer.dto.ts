import {
  IsEmail,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class UpdateConsumerDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  points: number;
}
