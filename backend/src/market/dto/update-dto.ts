import { IsEmail, IsNumber, IsString, MaxLength } from 'class-validator';

export class UpdateMarketDto {
  @IsString()
  market: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  phone: number;

  @IsString()
  description: string;

  @IsString()
  area: string;

  @IsString()
  logo: string;
}
