import { Entity,Column , PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Task } from '../tasks/task.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn({type: "bigint"})
    id: number

    @Column({type: "text"}) 
    username: string

    @Column({type: "text"})
    pass: string


    @OneToMany(() => Task, (task) => task.belongs_to) // Relación uno a muchos con tareas
    tasks: Task[];
}