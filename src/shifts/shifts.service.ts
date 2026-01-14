import { Get, Injectable } from '@nestjs/common';
import { Shift } from './shift.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShiftsDto } from './dto/create-shift.dto';


@Injectable()
export class ShiftsService {
    constructor( 
        @InjectModel(Shift)
        private shifts: typeof Shift
     ) {}
    async getAll(){
        return this.shifts
    }

    async createShift(createShiftsDto: CreateShiftsDto){
        const newShift = {
            startTime: createShiftsDto.startTime,
            endTime: createShiftsDto.endTime,
            location: createShiftsDto.location
        }
        this.shifts.create(newShift)
        return newShift
    }
  
}
