import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { Assignment } from './assignments.model';
import { InjectModel } from '@nestjs/sequelize';
import { RoleGuard } from 'src/roles/roles.guard';


@Injectable()
export class AssignmentsService {
   constructor( 
          @InjectModel(Assignment)
          private assignment: typeof Assignment
       ) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    
    const newAsignment = {
      userId: createAssignmentDto.userId,
      shiftId: createAssignmentDto.shiftId
    }
    await this.assignment.create(newAsignment)
    return newAsignment
  }

  findAll() {
    return this.assignment.findAll();
  }

  async findOne(id: number) {
    return this.assignment.findOne({
      where: {
        id: id
      }
    })
  }

}
