/* eslint-disable prettier/prettier */

import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param
    } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/users.dto';
    import { UsersService } from 'src/users/services/users/users.service';
    
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService) {}

      @Get()
      findUsers() {
        return this.userService.findUsers();
      }
      
      @Post()
      createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
      }

      @Put(':id')
      updateUsers(@Param('id')id: number, @Body() createUserDto: CreateUserDto) {
        return this.userService.updateUsers(id, createUserDto);
      }

      @Delete(':id')
      deleteUsers(@Param('id')id: number){
        return this.userService.deleteUsers(id);
      }
    }