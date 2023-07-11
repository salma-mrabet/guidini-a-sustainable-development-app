import { IsEmail,IsString, MaxLength,IsNotEmpty, IsNumber  } from "class-validator";


export class CreateConsumerDto {

    @IsString()
    @IsNotEmpty()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    points:number;


}