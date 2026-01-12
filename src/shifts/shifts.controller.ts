import { Controller, Get } from '@nestjs/common';

@Controller('shifts')
export class ShiftsController {
    @Get()
    sayHi(){
        return "Hi Shift"
    }
}
