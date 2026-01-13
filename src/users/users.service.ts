import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'


export type User = {
    userId: number,
    username: string,
    email: string,
    password: string,
    roles: string
}

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: "shay",
            email: "shayshn@",
            password: "1997",
            roles: "comander"
        },
        {
            userId: 2,
            username: "yosef",
            email: "yosef@",
            password: "12345",
            roles: "solider"
        },
    ]
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }


    async register(createUserDto: CreateUserDto): Promise<User> {
        const pass = createUserDto.password
        const hash = await bcrypt.hash(pass, 10)
        const newUser: User = {
            userId: this.users.length + 1,
            username: createUserDto.username,
            email: createUserDto.email,
            password: hash,
            roles: createUserDto.roles,
        }
        this.users.push(newUser);
        return newUser
    }
}
