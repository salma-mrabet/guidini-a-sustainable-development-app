import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { Consumer } from '../schemas/consumer.schema';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';

@Controller('consumer')
export class ConsumerController {
  constructor(private consumerService: ConsumerService) {}

  @Get()
  async getAllConsumers(): Promise<Consumer[]> {
    return await this.consumerService.findAll();
  }

  @Post()
  async createConsumer(
    @Body()
    consumer: CreateConsumerDto,
  ): Promise<Consumer> {
    return await this.consumerService.create(consumer);
  }

  @Get(':id')
  async getConsumer(
    @Param('id')
    id: string,
  ): Promise<Consumer> {
    return await this.consumerService.findById(id);
  }

  @Put(':id')
  async updateConsumer(
    @Param('id')
    id: string,
    @Body()
    consumer: UpdateConsumerDto,
  ): Promise<Consumer> {
    return await this.consumerService.updateById(id, consumer);
  }

  @Delete(':id')
  async deleteConsumer(
    @Param('id')
    id: string,
    consumer: Consumer,
  ): Promise<Consumer> {
    return await this.consumerService.deleteById(id, consumer);
  }
}
