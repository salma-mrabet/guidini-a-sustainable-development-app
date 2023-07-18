import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class User  {
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
  @ApiProperty({
    description: 'The lastname of the consumer',
  })
  lastname: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
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

export const UserSchema = SchemaFactory.createForClass(User);