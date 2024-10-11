import { Entity,Column , PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn({type: "bigint"})
    id: number

    @Column({type: "text"}) 
    username: string

    @Column({type: "text"})
    pass: string

    @Column({type: "text"})
    token: string
}