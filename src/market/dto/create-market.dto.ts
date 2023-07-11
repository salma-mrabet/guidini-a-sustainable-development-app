import { IsEmail,IsString } from "class-validator";


export class CreateMarketDto {

    @IsString()
    market: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}