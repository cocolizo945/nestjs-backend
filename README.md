## env data
```bash
DB_USER = 
DB_PASSWORD = 
DB_HOST = 
DB_PORT = 
DB_NAME = 
DB_SCHEME = 
SECRET = 
```

## Project Docker setup
```bash
$ docker compose up --build 

# en caso de que se levante sin conectar a la consola de docker
$ docker compose up -d --build 
```
use pgadmin to create scheme inside the database

## Docker Comandos para migraciones

```bash
# Acceder al contenedor de la aplicación
docker exec -it nestjs-app bash


$ npm run migration:generate /dir/to/migration

$ npm run migration:run 

$ npm run migration:revert
```


## Project local setup 

```bash
$ npm install

```
create postgres database with one schema


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Comandos para migraciones

```bash
$ npm run migration:generate /dir/to/migration

$ npm run migration:run 

$ npm run migration:revert
```


