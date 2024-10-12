import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from '../users/users.module'; // Asegúrate de tener tu UsersModule
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt.strategy';
import * as dotenv from 'dotenv';

dotenv.config()


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET, // Cambia esto por una clave segura
      signOptions: { expiresIn: '3600s' }, // El token expira en 60 segundos, ajusta según sea necesario
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
