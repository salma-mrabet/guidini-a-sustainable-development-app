import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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
    async updateMarket(id: string, updateDto: Partial<SuperMarket>): Promise<SuperMarket> {
        // Find the market by its ID
        const market = await this.marketModel.findById(id);
    
        if (!market) {
          throw new NotFoundException('Market not found');
        }
    
        // Update the market fields with the new data from updateDto
        Object.assign(market, updateDto);
    
        // Save the updated market in the database
        await market.save();
    
        return market;
      }
      async findUserById(id: string): Promise<SuperMarket> {
        // Find the user by ID in the database and return their data
        const user = await this.marketModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
