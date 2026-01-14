import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    async login(
        @Body("name") name: string,
        @Body("password") password: string) {
            console.log(name, password);
            
        return await this.authService.login(name, password)
    }


}
 