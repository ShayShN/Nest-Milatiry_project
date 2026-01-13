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

    async findOne(username: string, password: string) {
        return this.userModel.findOne({
            where: {
                username: username , password: password
            }
        })
    }

    async register(createUserDto: CreateUserDto) {
        const pass = createUserDto.password
        const hash = await bcrypt.hash(pass, 10)
        const newUser = {
            userId: this.userModel.length + 1,
            username: createUserDto.username,
            email: createUserDto.email,
            password: hash,
            roles: createUserDto.roles,
        }
        this.userModel.create(newUser)
        return newUser
    }
}
