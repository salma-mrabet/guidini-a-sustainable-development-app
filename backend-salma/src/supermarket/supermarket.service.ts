import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SuperMarket } from 'src/authmarket/schemas/supermarket.schema';

@Injectable()
export class SupermarketService {
    constructor(
        @InjectModel(SuperMarket.name)
        private supermarketModel: mongoose.Model<SuperMarket>,
      ) {}
    
      async findAll(): Promise<SuperMarket[]> {
        const supermarkets = await this.supermarketModel.find();
        return supermarkets;
      }
    

    
      async findById(id: string): Promise<SuperMarket> {
        const supermarket = await this.supermarketModel.findById(id);
    
        if (!supermarket) {
          throw new NotFoundException('supermarket not found ');
        }
        return supermarket;
      }
    
      // async updateById(id: string, updateData: Partial<SuperMarket>): Promise<SuperMarket> {
      //   const existingSupermarket = await this.supermarketModel.findById(id);
      
      //   if (!existingSupermarket) {
      //     throw new NotFoundException('Supermarket not found');
      //   }
      
      //   // Update all fields of the existingSupermarket with the values from updateData
      //   Object.assign(existingSupermarket, updateData);
      
      //   // Save the updated document to the database
      //   return await existingSupermarket.save();
      // }
      async updateById(id: string, updateData: Partial<SuperMarket>): Promise<SuperMarket> {
        const existingSupermarket = await this.supermarketModel.findById(id);
      
        if (!existingSupermarket) {
          throw new NotFoundException('Supermarket not found');
        }
      
        // Update all fields of the existingSupermarket with the values from updateData
        Object.assign(existingSupermarket, updateData);
      
        // Ensure the logo URL is set correctly
        existingSupermarket.logo = updateData.logo || existingSupermarket.logo;
      
        // Save the updated document to the database
        return await existingSupermarket.save();
      }
      
    
      async deleteById(id: string, supermarket: SuperMarket): Promise<SuperMarket> {
        return await this.supermarketModel.findByIdAndDelete(id, supermarket);
      }
}
