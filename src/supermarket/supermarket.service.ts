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
    
      async updateById(id: string, supermarket: SuperMarket): Promise<SuperMarket> {
        return await this.supermarketModel.findByIdAndUpdate(id, supermarket, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string, supermarket: SuperMarket): Promise<SuperMarket> {
        return await this.supermarketModel.findByIdAndDelete(id, supermarket);
      }
}
