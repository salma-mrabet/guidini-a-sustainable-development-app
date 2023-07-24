import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';



export class UpdateSuperMarketDto {
 
  @ApiProperty({
    description: 'market name',
  })
  @IsOptional()
  marketname: string;

  
  @ApiProperty({
    description: 'market email',
  })
  
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;


  @ApiProperty({
    description: 'Password',
  })
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty({
    description: 'Phone Number',
  })
  @IsNumber()
  @IsOptional()
  phone: string;


  @ApiProperty({
    description: 'Description',
  })
  @IsString()
  @IsOptional()
  description:string;

  @IsString()
  @IsOptional()
  area:string;


  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  @IsOptional()
  address: string;


}