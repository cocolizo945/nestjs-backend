// src/auth/jwt-payload.interface.ts

export interface JwtPayload {
    username: string; // El nombre de usuario, o cualquier otra propiedad que necesites
    sub: number; // El ID del usuario, puede ser de tipo string o number según tu implementación
  }
  