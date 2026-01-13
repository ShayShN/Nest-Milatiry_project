import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {

    @Column
    Id: number
    
    @Column
    startTime: Date

    @Column
    endTime: Date

    @Column
    location: string

}
 
    