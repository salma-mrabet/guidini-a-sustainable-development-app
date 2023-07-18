import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';


export class CreateInventoryDto {
    


  @IsNotEmpty()
  @ApiProperty({
    description: 'product name',
    required: true,
  })
  productname: string;


  @ApiProperty({
    description: 'Product Brand',
  })
  @IsString()
  brand: string;

  @ApiProperty({
    description: 'Quantity in stock',
  })
  @IsString()
  quantity: string;

  @ApiProperty({
    description: 'id of the current user ',
  })
  user: string ; 




}