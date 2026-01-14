import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftsDto } from './dto/create-shift.dto';


@Controller('shifts')
export class ShiftsController {
    constructor(private readonly shiftsService: ShiftsService) {}
    @Get()
    getAll(){
        return this.shiftsService.getAll()
    }

    @Post()
    create(@Body() createShiftsDto: CreateShiftsDto) {
        console.log(createShiftsDto);
        
        return this.shiftsService.createShift(createShiftsDto)
    }

}
