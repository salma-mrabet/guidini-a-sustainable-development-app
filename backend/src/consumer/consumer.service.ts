import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
// import { Consumer } from '../schemas/consumer.schema';
import { User } from 'src/authConsumer/schemas/user.schema';

@Injectable()
export class ConsumerService {
  constructor(
    @InjectModel(User.name)
    private consumerModel: mongoose.Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const consumers = await this.consumerModel.find();
    return consumers;
  }

  async create(consumer: User): Promise<User> {
    const res = await this.consumerModel.create(consumer);
    return res;
  }

  async findById(id: string): Promise<User> {
    const consumer = await this.consumerModel.findById(id);

    if (!consumer) {
      throw new NotFoundException('consumer not found ');
    }
    return consumer;
  }

  async updateById(id: string, consumer: User): Promise<User> {
    return await this.consumerModel.findByIdAndUpdate(id, consumer, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string, consumer: User): Promise<User> {
    return await this.consumerModel.findByIdAndDelete(id, consumer);
  }
}
