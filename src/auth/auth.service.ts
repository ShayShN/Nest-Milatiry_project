import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async login(name: string, pass: string) {
        const user = await this.usersService.findOneByName(name)
        if (!user) {
            throw new UnauthorizedException('user not found');
        }
        const isPasswordValid = await bcrypt.compare(pass, user.password)

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid Pass');
        }

        const { password, ...result } = user
        const token = await this.jwtService.signAsync({ result }, { expiresIn: "6h", secret: process.env.JWT_SECRET })
        console.log(token);

        return token
    }



}
