import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';



export class UpdateProductDto {
 
  @ApiProperty({
    description: 'product name',
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
  quantityInStock: string;

  @ApiProperty({
    description: 'quantity Recommended',
  })
  @IsString()
  @IsOptional()
  quantityRecommended: string;

  @ApiProperty({
    description: 'Category',
    example: 'food and groceries'
  })
  @IsString()
  @IsOptional()
  category: string;


}
