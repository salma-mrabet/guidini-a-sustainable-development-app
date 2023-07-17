import {
  IsEmail,
  IsString,
  MaxLength,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateMarketDto {
  @IsString()
  @IsNotEmpty()
  market: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  phone: number;

  @IsString()
  description: string;

  @IsString()
  area: string;

  @IsString()
  logo = 'default_logo.png';
}
