// update-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    description: 'product name',
  })
  @IsString()
  @IsOptional()
  productname: string;

  @ApiProperty({
    description: 'Product Brand',
  })
  @IsString()
  @IsOptional()
  brand: string;

  @ApiProperty({
    description: 'Quantity in stock',
  })
  @IsString()
  @IsOptional()
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
