import { Body,Controller,Get, Post, Param, Put, Delete } from '@nestjs/common';
import { MarketService } from './market.service';
import { Market } from '../schemas/market.schema';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-dto';

@Controller('market')
export class MarketController {
  constructor( private marketService: MarketService) {}

  @Get ()
  async getAllMarkets() : Promise <Market[]> {
    return this.marketService.findAll()
  }

  @Post()
  async createMarket(
        @Body()
        market: CreateMarketDto

    ):Promise<Market> {
        return this.marketService.create(market);
    }

    
  @Get (':id')
  async getMarket(
    @Param('id')
    id: string 

  ) : Promise <Market> {
    return this.marketService.findById(id);
  }

  @Put(':id')
  async updateMarket(
    @Param('id')
    id:string,
    @Body()
    market: UpdateMarketDto

    ):Promise<Market> {
        return this.marketService.updateById(id, market);
    }

    @Delete (':id')
    async deleteMarket(
      @Param('id')
      id: string ,
      market:Market
    ) : Promise <Market> {
      return this.marketService.deleteById(id,market);
    }
  



  }
