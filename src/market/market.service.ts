import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Market } from '../schemas/market.schema';

@Injectable()
export class MarketService {

    constructor (
        @InjectModel(Market.name)
        private marketModel: mongoose.Model<Market>
    ) {}

    async findAll() : Promise<Market[]>{
        const markets = await this.marketModel.find();
        return markets;
    }

    async create (market: Market) : Promise<Market> {
        const res = await this.marketModel.create(market)
        return res ;
    }

    async findById (id: string) : Promise<Market> {
        const market = await this.marketModel.findById(id)

        if (!market) {
            throw new NotFoundException('Market not found ')
        }
        return market;
    }

    async updateById (id: string, market: Market) : Promise<Market> {
        return await this.marketModel.findByIdAndUpdate(id,market,{
            new:true,
            runValidators:true,
        })
    }

    async deleteById (id: string, market: Market) : Promise<Market> {
        return await this.marketModel.findByIdAndDelete(id,market)
    }


}
