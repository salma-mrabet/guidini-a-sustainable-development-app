import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketModule } from './market/market.module';
import { ProductModule } from './product/product.module';
import { AdModule } from './ad/ad.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,

    }),
    MongooseModule.forRoot(process.env.DB_URI),
    MarketModule, 
    ProductModule, 
    AdModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
