import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTable1728688635368 implements MigrationInterface {
    name = 'UsersTable1728688635368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task"."user" ("id" BIGSERIAL NOT NULL, "username" text NOT NULL, "pass" text NOT NULL, "token" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"."user"`);
    }

}
