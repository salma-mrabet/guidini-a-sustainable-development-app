import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';


@Schema({
  timestamps: true,
})



export class Inventory {

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
  quantity: string;


  @Prop({  ref:'User'})
  user: string ;

  @Prop()
  quantityRecommended: string;

  

}

export const InventorySchema = SchemaFactory.createForClass(Inventory);