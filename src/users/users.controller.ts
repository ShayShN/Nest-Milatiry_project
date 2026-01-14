import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersservice: UsersService) {}

    @Post()
    async register(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
        return await this.usersservice.register(createUserDto)
    }
}
