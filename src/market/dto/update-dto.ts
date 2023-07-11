import { IsEmail,IsString } from "class-validator";


export class UpdateMarketDto {

    @IsString()
    market: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}