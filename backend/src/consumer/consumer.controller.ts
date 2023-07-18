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
import { User } from '../authConsumer/schemas/user.schema';
import { CreateConsumerDto } from './dto/create-consumer.dto';
import { UpdateConsumerDto } from './dto/update-consumer.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('consumer')
@ApiTags('consumer')
export class ConsumerController {
  constructor(private consumerService: ConsumerService) {}

  @Get()
  @ApiOperation({ summary: 'Get All Consumers' })
  @ApiOkResponse({type: User, isArray:true})
  async getAllConsumers(): Promise<User[]> {
    return await this.consumerService.findAll();
  }

  @Post()
  async createConsumer(
    @Body()
    consumer: CreateConsumerDto,
  ): Promise<User> {
    return await this.consumerService.create(consumer);
  }

  @Get(':id')
  async getConsumer(
    @Param('id')
    id: string,
  ): Promise<User> {
    return await this.consumerService.findById(id);
  }

  @Put(':id')
  async updateConsumer(
    @Param('id')
    id: string,
    @Body()
    consumer: UpdateConsumerDto,
  ): Promise<User> {
    return await this.consumerService.updateById(id, consumer);
  }

  @Delete(':id')
  async deleteConsumer(
    @Param('id')
    id: string,
    consumer: User,
  ): Promise<User> {
    return await this.consumerService.deleteById(id, consumer);
  }
}
