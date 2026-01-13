import { Injectable } from '@nestjs/common';


export type Shift = {
    id: number,
    startTime: Date,
    endTime: Date,
    location: string
}

@Injectable()
export class ShiftsService {}
