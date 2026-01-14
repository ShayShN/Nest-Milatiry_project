import { IsString } from 'class-validator';

export class CreateShiftsDto {
    
    @IsString()
    startTime: string;

    @IsString()
    endTime: string;

    @IsString()
    location: string;
}