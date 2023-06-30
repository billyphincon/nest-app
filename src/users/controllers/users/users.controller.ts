/* eslint-disable prettier/prettier */

import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
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
      
      @Post('create')
      createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
      }

      @Get('/:id')
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
      }

    }