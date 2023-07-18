import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';



export class UpdateUserDto {
 
  @ApiProperty({
    description: 'user name',
  })
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'user email',
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
    description: 'Recommendations',
  })
  @IsString()
  @IsOptional()
  recommendation:string;

  @IsString()
  @IsOptional()
  scannedTicket:string;


  @IsNumber()
  @IsOptional()
  points: number;


}