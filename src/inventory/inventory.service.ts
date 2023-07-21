import { Injectable, NotFoundException } from '@nestjs/common';
import { Inventory } from './inventory.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class InventoryService {
   

    constructor(
        @InjectModel(Inventory.name)
        private inventoryModel: mongoose.Model<Inventory>,
      ) {}
    
      async findAll(): Promise<Inventory[]> {
        const inventorys = await this.inventoryModel.find();
        return inventorys;
      }

      async findAllByUser(): Promise<Inventory[]> {
        const inventories = await this.inventoryModel.find();
        return inventories;
      }
    
      async create(inventory: Inventory, id:string): Promise<Inventory> {
        inventory.user = id;
        const res = await this.inventoryModel.create(inventory);
      
        return res;
      }
    
      async findById(id: string): Promise<Inventory> {
        const inventory = await this.inventoryModel.findById(id);
    
        if (!inventory) {
          throw new NotFoundException('inventory not found ');
        }
        return inventory;
      }
    
      async updateById(id: string, inventory: Inventory): Promise<Inventory> {
        return await this.inventoryModel.findByIdAndUpdate(id, inventory, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string, inventory: Inventory): Promise<Inventory> {
        return await this.inventoryModel.findByIdAndDelete(id, inventory);
      }

      // async getProductCount(product: string): Promise<number> {
      //   return await this.inventoryModel.countDocuments({  productname: product });

      // }
}
