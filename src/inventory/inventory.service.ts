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
        const inventories = await this.inventoryModel.find();
        return inventories;
      }


      async findAllByUser(userId: string): Promise<Inventory[]> {
        console.log('Finding inventories for userId:', userId);
        return  this.inventoryModel.find({ user: userId });
       
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

      async getProductCount(product: string): Promise<number> {
        console.log(product)
        return await this.inventoryModel.countDocuments({  productname: product });

      }

      // async getProductCount(id: string): Promise<number> {
      //   const inventory= await this.findById(id)
      //   const matchingProducts: Inventory[] = await this.inventoryModel.find({
      //     productname: inventory.productname,
      //   });  
      //   return matchingProducts.length; // Return the count of matching documents
      // }
}
