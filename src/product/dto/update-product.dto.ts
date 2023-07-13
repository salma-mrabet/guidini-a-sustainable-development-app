import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    description: 'id of the product',
  })
  @IsString()
  id: string;

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
}
