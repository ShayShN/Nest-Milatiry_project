import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Get()
    login(
        @Query("name") username: string,
        @Query("pass") pass: string) {

        return this.authService.login(username, pass)
    }

}
