import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';
import { MarketSchema } from '../schemas/market.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Market', schema: MarketSchema}])],
  controllers: [MarketController],
  providers: [MarketService]
})
export class MarketModule {}
