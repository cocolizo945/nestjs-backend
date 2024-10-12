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

#or 

$ docker compose up -d --build 
```
use pgadmin to create scheme inside the database

## Docker Comandos para migraciones

```bash

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


## Comandos para migraciones
{/users, GET}
```bash
{

}
```

{/users/:id, GET}
```bash
{

}
```

{/users, POST}
```bash
{
"username": string
"pass": string
}
```

{/users/:id, DELETE}
token needed
```bash
{

}
```

{/tasks/all, GET}
token needed
```bash
{

}
```

{/tasks/filter/:belongsToId, GET}
token needed
```bash
{

}
```

{/tasks/add, POST}
token needed
```bash
{
    task_name: string;            
    task_description: string;     
    belongs_to: number;

}
```

{/tasks/delete/:id, DELETE}
token needed
```bash
{

}
```

{/tasks/edit/:id, PATCH}
token needed
```bash
{
    task_name?: string;            
    task_description?: string;     
    belongs_to?: number;      
}
```

{/auth/login, POST}
```bash
{
 "username":"",
  "password":""
}
```