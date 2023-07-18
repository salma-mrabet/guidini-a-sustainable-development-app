import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})

export class User  {

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  recommendation:string;

  @Prop()
  scannedTicket:string;

  @Prop({
    default: 0,
  })
  points: number;

}

export const UserSchema = SchemaFactory.createForClass(User);