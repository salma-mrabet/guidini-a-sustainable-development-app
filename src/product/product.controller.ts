
import {
    Body,
    Controller,
    Get,
    Post,
    Param,
    Put,
    Delete,
    UseGuards,
  } from '@nestjs/common';

import { ProductService } from './product.service';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
 
  async createProduct(
    @Body()
    product: CreateProductDto,

  ): Promise<Product> {
  
    return this.productService.create(product);
  }

  @Get(':id')

  async getProduct(
    @Param('id')
    id: string,
  ): Promise<Product> {
    return this.productService.findById(id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateById(id, product);
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id')
    id: string,
    product: Product,
  ): Promise<Product> {
    return this.productService.deleteById(id, product);
  }
}
