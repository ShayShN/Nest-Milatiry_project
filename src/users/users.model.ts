import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {

    @Column
    userId: number
    
    @Column
    username: string

    @Column
    email: string

    @Column
    password: string

    @Column
    roles: string
   
}
