import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InventorySchema } from './inventory.schema';

@Module({
  imports: [
    
    MongooseModule.forFeature([{ name: 'Inventory', schema: InventorySchema }]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
  exports: [InventoryService]
})
export class InventoryModule {}
