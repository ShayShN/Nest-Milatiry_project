import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    login(
        @Body("username") username: string,
        @Body("password") password: string) {
            console.log(username, password);
            
        return this.authService.login(username, password)
    }


}
 