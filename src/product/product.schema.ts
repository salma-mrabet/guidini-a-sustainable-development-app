import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({
    required: true,
  })
  @ApiProperty({
    description: 'id of the product',
    required: true,
  })
  id: string;

  @Prop({
    required: true,
  })
  @ApiProperty({
    description: 'product name',
    required: true,
  })
  productname: string;

  @Prop()
  brand: string;

  @Prop()
  quantityInStock: string;

  @Prop()
  quantityRecommended: string;

  
}

export const ProductSchema = SchemaFactory.createForClass(Product);
