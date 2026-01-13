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

    async findOne(name: string, password: string) {
        return this.userModel.findOne({
            where: {
                name: name , password: password
            }
        })
    }

    async register(createUserDto: CreateUserDto) {
        const pass = createUserDto.password
        const hash = await bcrypt.hash(pass, 10)
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
