import { Injectable } from '@nestjs/common';

export type User = {
                    userId: Number,
                    username: String,
                    password: String
}

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: "shay",
            email: "shayshn@",
            password: "1997",
            role: "comander"
        },
        {
            userId: 2,
            username: "yosef",
            email: "yosef@",
            password: "12345",
            role: "solider"
        },
    ]
    async findOne(username: String): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }
}
