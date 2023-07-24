// create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
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
  quantityInStock: string;

  @ApiProperty({
    description: 'quantity Recommended',
  })
  @IsString()
  @IsOptional()
  quantityRecommended: string;

  @ApiProperty({
    description: 'Product category',
  })
  @IsString()
  @IsOptional()
  category: string; // Add the category field here
}
