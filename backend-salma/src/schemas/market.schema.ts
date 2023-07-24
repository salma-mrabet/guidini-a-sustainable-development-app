import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Market {
  @Prop({
    required: true,
  })
  marketname: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  phone: string;

  @Prop()
  description: string;

  @Prop()
  area: string;

  @Prop()
  logo: string;
}

export const MarketSchema = SchemaFactory.createForClass(Market);
