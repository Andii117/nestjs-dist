import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @ApiTags('users')
  @ApiOperation({ summary:'Create User'})
  @ApiResponse({ status: 200, description: 'Created User'})
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiTags('users')
  @ApiOperation({ summary:'Get  All User'})
  @ApiResponse({ status: 200, description: 'Get All User Information'})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiTags('users')
  @ApiOperation({ summary:'Get User by Id'})
  @ApiResponse({ status: 200, description: 'Get User Information by ID'})
  @ApiResponse({ status: 403, description: 'Forbident User Information by ID'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiTags('users')
  @ApiOperation({ summary:'Update User by Id'})
  @ApiResponse({ status: 200, description: 'Update User Information by ID'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiTags('users')
  @ApiOperation({ summary:'Delete User by Id'})
  @ApiResponse({ status: 200, description: 'Delete User Information by ID'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
