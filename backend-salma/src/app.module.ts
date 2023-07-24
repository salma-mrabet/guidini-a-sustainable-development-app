import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdModule } from './ad/ad.module';

import { AuthModule } from './auth/auth.module';
import { AuthMarketModule } from './authmarket/authmarket.module';
import { InventoryModule } from './inventory/inventory.module';
import { UserModule } from './user/user.module';
import { SupermarketModule } from './supermarket/supermarket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
   
    ProductModule,
    AdModule,

    AuthModule,
    AuthMarketModule,
    InventoryModule,
    UserModule,
    SupermarketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
