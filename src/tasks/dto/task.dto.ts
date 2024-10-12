// src/tasks/dto/task.dto.ts
export class TaskDto {
    id: number;
    task_name: string;
    task_description: string;
    status: boolean;
    belongs_to: number; // Cambia esto a number si es necesario
  }
  