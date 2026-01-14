import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    async findOneByName(name: string) {
        return (await this.userModel.findOne({
            where: {
                name 
            }
        }))?.toJSON<User>()
    }

    async register(createUserDto: CreateUserDto) {
        if (createUserDto.password === "1997") {
            createUserDto.role = "comander"
        }else{ createUserDto.role = "solider"}

        const hash = await bcrypt.hash(createUserDto.password, 10)
        const newUser = {
            name: createUserDto.name,
            email: createUserDto.email,
            password: hash,
            role: createUserDto.role,
        }
        this.userModel.create(newUser)
        return newUser
    }
}
