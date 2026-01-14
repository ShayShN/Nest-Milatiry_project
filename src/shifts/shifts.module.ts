import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { Shift } from './shift.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Shift])],
  controllers: [ShiftsController],
  providers: [ShiftsService]
})
export class ShiftsModule {}
