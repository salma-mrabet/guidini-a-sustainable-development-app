import { Module } from '@nestjs/common';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/product/product.schema';
import { ProductModule } from 'src/product/product.module';
import { AdSchema } from './schemas/ad.schema';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forFeature([{ name: 'Ad', schema: AdSchema }]),
  ],

  controllers: [AdController],
  providers: [AdService],
})
export class AdModule {}
