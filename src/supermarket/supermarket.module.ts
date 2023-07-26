import { Module } from '@nestjs/common';
import { SupermarketController } from './supermarket.controller';
import { SupermarketService } from './supermarket.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperMarketSchema } from 'src/authmarket/schemas/supermarket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SuperMarket', schema: SuperMarketSchema },
    ]),
  ],
  controllers: [SupermarketController],
  providers: [SupermarketService],
})
export class SupermarketModule {}
