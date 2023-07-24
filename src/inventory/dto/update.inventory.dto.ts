import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';


export class UpdateInventoryDto {
    


 
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
    description: 'quantity recommended for the user ',
  })
  @IsOptional()
  quantityRecommended: number;






}