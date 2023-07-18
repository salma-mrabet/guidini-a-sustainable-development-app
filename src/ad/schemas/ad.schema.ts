import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate } from 'class-validator';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';


@Schema({
  timestamps: true,
})
     
export class Ad {

    @Prop()
      @ApiProperty({
        description: 'ad name',
        example: 'offer, reduction .. ',
        required: true,
      })
      adname: string;


  @Prop()
  @ApiProperty({
    description: 'product name',
    required: true,
  })
  productname: string;

  @Prop()
  @ApiProperty({
    description: 'product id',
    required: true,
  })
  productId: string;

  @Prop()
  @ApiProperty({
    description: 'brand name',
  })
  brand: string;

  @Prop({default: "imagelink"})
  @ApiProperty({
    description: 'image of the ad ',
  })
  image: string;

  @Prop()
  @ApiProperty({
    description: 'begin date',
  })
//   @IsDate()
  begin_date: Date;


  @Prop()
  @ApiProperty({
    description: 'end date',
  })
//   @IsDate()
  end_date: Date;










  

}

export const AdSchema = SchemaFactory.createForClass(Ad);