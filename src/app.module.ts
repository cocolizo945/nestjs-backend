import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';


dotenv.config();


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DBHOST,
    port: parseInt(process.env.DBPORT),
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    schema: process.env.DBSCHEME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
