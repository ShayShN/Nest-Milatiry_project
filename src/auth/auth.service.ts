import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async login(username: string, pass: string) {
        const user = await this.usersService.findOne(username)
        console.log(user);
        
        if (user?.password !== pass) {
            throw new UnauthorizedException()
        }
        const { password, ...result } = user
        const token = await this.jwtService.signAsync({ result },  { expiresIn: "1h", secret:process.env.JWT_SECRET })
        console.log(token);
        
        return token
    }

 
}
