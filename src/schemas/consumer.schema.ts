import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class Consumer {
  @Prop({
    required: true,
  })
  @ApiProperty({
    description: 'The first name of the consumer',
  })
  firstname: string;

  @Prop({
    required: true,
  })
  lastname: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    default: 0,
  })
  points: number;
}

export const ConsumerSchema = SchemaFactory.createForClass(Consumer);
