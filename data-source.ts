// data-source.ts
import { DataSource } from 'typeorm';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'root',   // Tu configuración aquí
  password: '3g8tss955',   // Tu contraseña
  database: 'backnest',
  schema: 'tasks',     // El nombre de tu base de datos
  entities: [__dirname + '/**/*.entity{.ts,.js}'],     // Lista de tus entidades
  migrations: ['dist/src/migrations/*.js'],  // Directorio de migraciones compiladas
  synchronize: false,   
  logging: true  // Debe estar en `false` en producción
});
