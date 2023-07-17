
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
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.schema';
import { CreateInventoryDto } from './dto/create.inventory.dto';


@Controller('inventory')
@ApiTags('inventory')
export class InventoryController {
    constructor(private inventoryService: InventoryService) {}

  @Get()
  async getAllInventoriesServices(): Promise<Inventory[]> {
    return this.inventoryService.findAll();
  }

  @Post(':id')
 
  async createInventory(
    @Body()
    inventory: CreateInventoryDto,
    @Param('id')
    id:string,


  ): Promise<Inventory> {
    return this.inventoryService.create(inventory,id);
  }


  @Get(':id')
  async getInventory(
    @Param('id')
    id: string,
  ): Promise<Inventory> {
    return this.inventoryService.findById(id);
  }

  @Put(':id')
  async updateInventory(
    @Param('id')
    id: string,
    @Body()
    inventory: CreateInventoryDto,
  ): Promise<Inventory> {
    return this.inventoryService.updateById(id, inventory);
  }

  @Delete(':id')
  async deleteInventory(
    @Param('id')
    id: string,
    inventory: Inventory,
  ): Promise<Inventory> {
    return this.inventoryService.deleteById(id, inventory);
  }
}
