import { Controller, Get } from '@nestjs/common';
import { AuthMarketService} from './auth-market.service';
import { SignUpDto } from './dto/signup.dto'
import { Body, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

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
}

