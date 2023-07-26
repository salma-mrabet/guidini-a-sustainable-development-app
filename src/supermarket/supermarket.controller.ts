import { Body, Controller, Get, Param, Put, Delete } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';
import { SupermarketService } from './supermarket.service';
import { SuperMarket } from 'src/authmarket/schemas/supermarket.schema';
import { UpdateSuperMarketDto } from './dto/update.supermarket.dto';

@Controller('supermarket')
@ApiTags('user-supermarket')
export class SupermarketController {
  constructor(private supermarketService: SupermarketService) {}

  @Get()
  async getAllSuperMarkets(): Promise<SuperMarket[]> {
    return this.supermarketService.findAll();
  }

  @Get(':id')
  async getSuperMarket(
    @Param('id')
    id: string,
  ): Promise<SuperMarket> {
    return this.supermarketService.findById(id);
  }

  @Put(':id')
  async updateSuperMarket(
    @Param('id')
    id: string,
    @Body()
    supermarket: UpdateSuperMarketDto,
  ): Promise<SuperMarket> {
    return this.supermarketService.updateById(id, supermarket);
  }

  @Delete(':id')
  async deleteSuperMarket(
    @Param('id')
    id: string,
    supermarket: SuperMarket,
  ): Promise<SuperMarket> {
    return this.supermarketService.deleteById(id, supermarket);
  }
}
