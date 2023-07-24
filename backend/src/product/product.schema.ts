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
  category: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'User'})
  // user: User ;

  
}

export const ProductSchema = SchemaFactory.createForClass(Product);
