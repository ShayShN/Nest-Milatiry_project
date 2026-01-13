
import { Column, Model, Table, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    role: string;
}
