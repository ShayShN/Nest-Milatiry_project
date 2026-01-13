import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserRoleGuard } from 'src/roles/roles.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersservice: UsersService) {}

    @Post()
    @UseGuards(CreateUserRoleGuard)
    register(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
        return this.usersservice.register(createUserDto)
    }
}
