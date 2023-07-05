/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
      
  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
      
  findUsers() {
    return this.userRepository.find();
  }

  updateUsers(id: number, createUserDto: CreateUserDto) {
    return this.userRepository.createQueryBuilder().update().set({name: createUserDto.name, mobile: createUserDto.mobile, email: createUserDto.email}).where('id = :id', {id}).execute();
  }

  deleteUsers(id: number) {
    return this.userRepository.delete(id);
  }
}