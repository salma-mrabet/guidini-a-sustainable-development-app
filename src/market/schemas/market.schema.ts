import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Market {
    @Prop()
    market:string;

    @Prop()
    email:string;

    @Prop()
    password:string;
}

export const MarketSchema = SchemaFactory.createForClass(Market)