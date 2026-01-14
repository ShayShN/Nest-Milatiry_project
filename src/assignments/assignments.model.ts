import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Assignment extends Model {


    @Column({
        type: DataType.INTEGER
    })
    userId: number

    @Column({
        type: DataType.STRING
    })
    shiftId: string

}




