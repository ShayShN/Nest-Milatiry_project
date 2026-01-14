import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Shift extends Model {

    @Column({
        type: DataType.STRING
    })
    startTime: string

    @Column({
        type: DataType.STRING
    })
    endTime: string

    @Column({
        type: DataType.STRING
    })
    location: string

}

