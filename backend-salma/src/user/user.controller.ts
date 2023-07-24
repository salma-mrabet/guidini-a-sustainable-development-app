import { Body, Controller, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/auth/schemas/user.schema';
import { UpdateUserDto } from './dto/update.user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User-Consumer')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    async getUser(
      @Param('id')
      id: string,
    ): Promise<User> {
      return this.userService.findById(id);
    }
  
    @Put(':id')
    async updateUser(
      @Param('id')
      id: string,
      @Body()
      user: UpdateUserDto,
    ): Promise<User> {
      return this.userService.updateById(id, user);
    }
  
    @Delete(':id')
    async deleteUser(
      @Param('id')
      id: string,
      user: User,
    ): Promise<User> {
      return this.userService.deleteById(id, user);
    }
}
