import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): Promise<User[]> {
      return this.usersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
      return this.usersService.findOne(+id);
    }
  
    
    @Post()
    create(@Body() user: Partial<User>): Promise<User> {
      return this.usersService.create(user);
    }
  
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      return this.usersService.remove(+id);
    }
    
    
}
