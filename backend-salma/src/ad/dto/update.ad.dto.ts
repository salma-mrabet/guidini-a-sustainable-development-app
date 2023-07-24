import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
  IsDate,
} from 'class-validator';

export class UpdateAdDto {

  @IsOptional()
  @ApiProperty({
    description: 'ad name',
    example: 'offer, reduction .. ',
    required: true,
  })
  adname: string;


  @IsOptional()
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

  @IsOptional()
  brand: string;

  @ApiProperty({
    description: 'image of the ad ',
  })

  @IsOptional()
  image: string;

  @ApiProperty({
    description: 'begin date',
  })
 
  @IsOptional()
  begin_date: Date;

  @ApiProperty({
    description: 'end date',
  })
 
  @IsOptional()
  end_date: Date;
}
