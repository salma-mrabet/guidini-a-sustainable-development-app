import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Consumer } from '../schemas/consumer.schema';

@Injectable()
export class ConsumerService {
  constructor(
    @InjectModel(Consumer.name)
    private consumerModel: mongoose.Model<Consumer>,
  ) {}

  async findAll(): Promise<Consumer[]> {
    const consumers = await this.consumerModel.find();
    return consumers;
  }

  async create(consumer: Consumer): Promise<Consumer> {
    const res = await this.consumerModel.create(consumer);
    return res;
  }

  async findById(id: string): Promise<Consumer> {
    const consumer = await this.consumerModel.findById(id);

    if (!consumer) {
      throw new NotFoundException('consumer not found ');
    }
    return consumer;
  }

  async updateById(id: string, consumer: Consumer): Promise<Consumer> {
    return await this.consumerModel.findByIdAndUpdate(id, consumer, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string, consumer: Consumer): Promise<Consumer> {
    return await this.consumerModel.findByIdAndDelete(id, consumer);
  }
}
