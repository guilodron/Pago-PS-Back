import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity("expense")
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: String;

    @Column()
    type: number;

    @Column({type: 'float'})
    value: number
}