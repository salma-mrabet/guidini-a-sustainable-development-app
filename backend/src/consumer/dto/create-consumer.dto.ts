import {
  IsEmail,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConsumerDto {
  @ApiProperty({
    description: 'The first name of the consumer',
    required:true
  })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the consumer' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'The email address of the consumer',
})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the consumer',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 100,
    description: 'The points of the consumer',
    type: Number,
  })
  @IsNumber()
  points: number;
}
