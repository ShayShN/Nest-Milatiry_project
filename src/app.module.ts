import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './users/users.model';
import { Shift } from './shifts/shift.model';
import { Assignment } from './assignments/assignments.model';


@Module({
  imports: [ConfigModule.forRoot(),SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpass123',
      logging:false,
      database: 'military',
      models: [User, Shift, Assignment],
      autoLoadModels: true,
      synchronize: true,
    }), AuthModule, UsersModule, ShiftsModule, AssignmentsModule, User
      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
