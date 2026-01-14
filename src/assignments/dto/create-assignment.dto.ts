import { IsNumber, IsString } from "class-validator";

export class CreateAssignmentDto {
        @IsNumber()
        userId: number;
    
        @IsNumber()
        shiftId: number;
}
    