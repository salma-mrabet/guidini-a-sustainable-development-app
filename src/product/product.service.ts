import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product } from './product.schema';
import { Inventory } from 'src/inventory/inventory.schema';
import { InventoryService } from 'src/inventory/inventory.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>,
    private inventoryModel: InventoryService,
  ) {}

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async create(product: Product): Promise<Product> {
    const res = await this.productModel.create(product);
    return res;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('product not found ');
    }
    return product;
  }

  async updateById(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id, product);
  }

 async getRecommendedQuantity(id: string): Promise<number> {
  const product = await this.productModel.findById(id);
  const productName= product.productname;
  const quantity = await this.inventoryModel.getProductCount(productName)
  return quantity;



 }
  
}