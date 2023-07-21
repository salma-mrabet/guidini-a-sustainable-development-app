

import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Put,
    Delete,
    UseGuards,
  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdService } from './ad.service';
import { Ad } from './schemas/ad.schema';
import { CreateAdDto } from './dto/create.ad.dto';
import { UpdateAdDto } from './dto/update.ad.dto';

@Controller('ad')
@ApiTags('ad')
export class AdController {
    constructor(private adService: AdService) {}

    @Get()
    async getAllProducts(): Promise<Ad[]> {
      return this.adService.findAll();
    }
  
    @Post(':id')
   
    async createAd(
      @Param('id')
      id: string,
      @Body()
      ad: CreateAdDto,
  
    ): Promise<Ad> {
    
      return this.adService.create(ad,id);
    }
  
    @Get(':id')
  
    async getProduct(
      @Param('id')
      id: string,
    ): Promise<Ad> {
      return this.adService.findById(id);
    }
  
    @Put(':id')
    async updateProduct(
      @Param('id')
      id: string,
      @Body()
      ad: UpdateAdDto,
    ): Promise<Ad> {
      return this.adService.updateById(id, ad);
    }
  
    @Delete(':id')
    async deleteProduct(
      @Param('id')
      id: string,
      ad: Ad,
    ): Promise<Ad> {
      return this.adService.deleteById(id, ad);
    }
  }

