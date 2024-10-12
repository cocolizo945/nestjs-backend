// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Patch, Query, BadRequestException, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/auth/jwt-auth.guard';
import { TaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async findAll(): Promise<TaskDto[]> {
    return this.tasksService.findAll(); 
  }

  @UseGuards(JwtAuthGuard)
  @Get('filter/:belongsToId') // Cambia la ruta para aceptar un parámetro de ruta
  async findByBelongsTo(@Param('belongsToId') belongsToId: string): Promise<TaskDto[]> {
    const id = parseInt(belongsToId, 10); // Convertir el parámetro a número

    if (isNaN(id)) {
      throw new BadRequestException('El parámetro belongs_to debe ser un número válido.');
    }

    return this.tasksService.findAllByBelongsTo(id); // Llama al método del servicio
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  create(@Body() taskData: Partial<Task>): Promise<Task> {
    return this.tasksService.create(taskData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id') // Cambia la ruta para eliminar una tarea por id
  async deleteTask(@Param('id') id: string): Promise<void> {
    const taskId = parseInt(id, 10); // Convertir el parámetro a número

    if (isNaN(taskId)) {
      throw new BadRequestException('El parámetro id debe ser un número válido.');
    }

    return this.tasksService.deleteTask(taskId); // Llama al método del servicio para eliminar la tarea
  }

  @UseGuards(JwtAuthGuard)
  @Patch('edit/:id') // Cambia la ruta para editar una tarea por id
  async updatePartial(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const taskId = parseInt(id, 10); // Convertir el parámetro a número

    if (isNaN(taskId)) {
      throw new BadRequestException('El parámetro id debe ser un número válido.');
    }

    return this.tasksService.updatePartial(taskId, updateTaskDto); // Llama al método del servicio para actualizar parcialmente la tarea
  }
}
