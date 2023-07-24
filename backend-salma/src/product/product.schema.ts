import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Product {
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

  @Prop()
  category: string; // Add the category field here

  // ...
}

export const ProductSchema = SchemaFactory.createForClass(Product);
