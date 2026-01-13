import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsInt()
    userId: number;

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    roles: string
}