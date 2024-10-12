// data-source.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';


dotenv.config({ path: './.env'})


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Lista de tus entidades
  migrations: ['dist/src/migrations/*.js'],  // Directorio de migraciones compiladas
  synchronize: false,   
  logging: true  // Debe estar en `false` en producción
});

