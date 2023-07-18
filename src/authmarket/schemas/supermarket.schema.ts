import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class SuperMarket  {
  @Prop()
  marketname: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: number;

  @Prop()
  description: string;

  @Prop()
  area: string;

  @Prop({
    default: 'default_logo.png',
  })
  logo: string;

  @Prop()
  address:string;
}

export const SuperMarketSchema = SchemaFactory.createForClass(SuperMarket);