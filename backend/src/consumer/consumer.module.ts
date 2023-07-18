import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';
// import { ConsumerSchema } from 'src/schemas/consumer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/authConsumer/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Consumer', schema: UserSchema }]),
  ],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
