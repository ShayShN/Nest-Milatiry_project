import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {

    @Column
    Id: number
    
    @Column
    userId: number

    @Column
    shiftId: string

}
 

    
    
    