import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Market {
    @Prop({
        required: true,
      })
    market:string;

    @Prop({
        required: true,
        unique:true,
      })
    email:string;

    @Prop({
        required: true,
      })
    password:string;

    @Prop()
    phone:number;

    @Prop()
    description:string;

    @Prop()
    area:string;

    @Prop({
        default: "default_logo.png",
      })
    logo:string;

    
}

export const MarketSchema = SchemaFactory.createForClass(Market)