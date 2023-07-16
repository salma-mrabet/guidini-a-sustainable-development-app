import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthMarketController } from './authmarket.controller';
import { AuthMarketService } from './auth-market.service';
import { SuperMarketSchema } from './schemas/supermarket.schema';
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: config.get('JWT_EXPIRES') },
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'SuperMarket', schema: SuperMarketSchema }]),
  ],
  controllers: [AuthMarketController],
  providers: [AuthMarketService],
})
export class AuthMarketModule {}
