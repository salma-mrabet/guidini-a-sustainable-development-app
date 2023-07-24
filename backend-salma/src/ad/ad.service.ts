import { forwardRef,Injectable, NotFoundException,Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Ad } from './schemas/ad.schema';
import { Product } from 'src/product/product.schema';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from '../product/product.service';

@Injectable()
export class AdService {
    constructor(
        @InjectModel(Ad.name)
        
        private adModel: mongoose.Model<Ad>,
        @Inject(forwardRef(() => ProductService))
        private productService: ProductService,
      ) {}
    
      async findAll(): Promise<Ad[]> {
        const ads = await this.adModel.find();
        return ads;
      }
    
      // async create(ad: Ad, id: string): Promise<Ad> {
      //   const product = await this. productService.findById(id)
      //   ad.productId = id ;
      //   ad.productname= product.productname;
      //   ad.brand = product.brand;
      //   const res = await this.adModel.create(ad);
      //   return res;
      // }
      async create(ad: Ad): Promise<Ad> {
        
        const res = await this.adModel.create(ad);
        return res;
      }
    
      async findById(id: string): Promise<Ad> {
        const ad = await this.adModel.findById(id);
        if (!ad) {
          throw new NotFoundException('ad not found ');
        }
        return ad;
      }
    
      async updateById(id: string, ad: Ad): Promise<Ad> {
        return await this.adModel.findByIdAndUpdate(id, ad, {
          new: true,
          runValidators: true,
        });
      }
    
      async deleteById(id: string, ad: Ad): Promise<Ad> {
        return await this.adModel.findByIdAndDelete(id, ad);
      }
}
