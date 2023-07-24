import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsDate,
} from 'class-validator';

export class CreateAdDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ad name',
    example: 'offer, reduction .. ',
    required: true,
  })
  adname: string;


  @ApiProperty({
    description: 'product name',
    required: true,
  })
  productname: string;


  @ApiProperty({
    description: 'product id',
    required: true,
  })
  productId: string;
  
  @ApiProperty({
    description: 'Product Brand',
  })

  brand: string;

  @ApiProperty({
    description: 'image of the ad ',
  })
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty({
    description: 'begin date',
  })

  @IsOptional()
  begin_date: string;

  @ApiProperty({
    description: 'end date',
  })
 
  @IsOptional()
  end_date: string;
}
