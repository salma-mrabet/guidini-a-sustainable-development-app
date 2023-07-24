  import { Controller, Get ,Put,Param, Req } from '@nestjs/common';
  import { AuthMarketService} from './auth-market.service';
  import { SignUpDto } from './dto/signup.dto'
  import { Body, Post } from '@nestjs/common';
  import { LoginDto } from './dto/login.dto';
  import { SuperMarket } from './schemas/supermarket.schema';

  @Controller('authmarket')
  export class AuthMarketController {
    constructor(private authService: AuthMarketService) {}

    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
      return this.authService.signUp(signUpDto);
    }

    @Post('/login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
      return this.authService.login(loginDto);
    }
    @Put('/:id') // Use PUT method to update the market
    async updateMarket(
      @Param('id') id: string,
      @Body() updateDto: Partial<SuperMarket>
    ): Promise<{ message: string; market: SuperMarket }> {
      const updatedMarket = await this.authService.updateMarket(id, updateDto);

      return {
        message: 'Market updated successfully',
        market: updatedMarket,
      };
    }
    

  }

