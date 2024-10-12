// src/tasks/task.entity.ts
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/users.entity';

@Entity('tasks') // Nombre de la tabla en la base de datos
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  task_name: string;

  @Column('text')
  task_description: string;

  @Column('boolean', {default: false})
  status: boolean;

  @Column('bigint') // Este es el campo que almacenará el ID del usuario
  belongs_to: number

  @ManyToOne(() => User, (user) => user.tasks, { eager: true, onDelete: 'CASCADE' }) 
  @JoinColumn({ name: 'belongs_to' }) 
  user: User;
  
}
