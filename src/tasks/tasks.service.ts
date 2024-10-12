// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<TaskDto[]> {
    const tasks = await this.tasksRepository.find();
    return tasks.map(task => ({
      id: task.id,
      task_name: task.task_name,
      task_description: task.task_description,
      status: task.status,
      belongs_to: task.belongs_to,
    }));
  }

  async findAllByBelongsTo(belongsToId: number): Promise<TaskDto[]> {
    const tasks = await this.tasksRepository
      .createQueryBuilder('task')
      .where('task.belongs_to = :belongsToId', { belongsToId }) // Filtra las tareas por belongs_to
      .getMany();

    return tasks.map(task => ({
      id: task.id,
      task_name: task.task_name,
      task_description: task.task_description,
      status: task.status,
      belongs_to: task.belongs_to,
    }));
  }

  create(task: Partial<Task>): Promise<Task> {
    const newTask = this.tasksRepository.create(task);
    return this.tasksRepository.save(newTask);
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
  }

  async updatePartial(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskDto> {
    const task = await this.tasksRepository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }

    // Actualiza los campos que están presentes en el DTO
    Object.assign(task, updateTaskDto);
    await this.tasksRepository.save(task); // Guarda la tarea actualizada

    return {
      id: task.id,
      task_name: task.task_name,
      task_description: task.task_description,
      status: task.status,
      belongs_to: task.belongs_to,
    };
  }

  
}
