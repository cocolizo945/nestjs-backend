export class UpdateTaskDto {
  
    task_name?: string;            // Campo opcional
    task_description?: string;     // Campo opcional
    belongs_to?: number;           // Campo opcional (puede ser el ID del usuario)
  }