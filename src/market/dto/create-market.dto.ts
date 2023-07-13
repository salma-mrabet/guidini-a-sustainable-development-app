import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateMarketDto {
  @ApiProperty({
    description: 'The company name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  market: string;

  @ApiProperty({
    description: 'email ',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Password',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Contact',
  })
  @IsNumber()
  phone: number;

  @ApiProperty({
    description: 'Description of the company',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Area',
  })
  @IsString()
  area: string;

  @ApiProperty({
    description: 'Logo',
  })
  @IsString()
  logo = 'default_logo.png';
}
