import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SuperMarket } from './schemas/supermarket.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'; 
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthMarketService {
    constructor(
        @InjectModel(SuperMarket.name)
        private marketModel: Model<SuperMarket>,
        private jwtService : JwtService
    ) {}

    async signUp(signUpDto): Promise<{ token : string }>{
        const {marketname, email, password } = signUpDto

        const hashedPassword = await bcrypt.hash(password , 10)

        const market = await this.marketModel.create({
            marketname,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({id :market._id})

        return { token}
    }

    async login (loginDto: LoginDto): Promise<{ token: string}> {
        const { email, password } = loginDto;

        const market = await this.marketModel.findOne({ email })

        if(!market) {
            throw new UnauthorizedException('Invalid email or password')
        }

        const isPasswordMatched = await bcrypt.compare(password, market.password)
        
        
        if(!isPasswordMatched) {
            throw new UnauthorizedException('Invalid email or password')
        }

        const token = this.jwtService.sign({id :market._id})

        return { token}
    }

}
