import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1728684433895 implements MigrationInterface {
    name = 'CreateUserTable1728684433895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks"."user" ("id" BIGSERIAL NOT NULL, "username" text NOT NULL, "pass" text NOT NULL, "token" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tasks"."user"`);
    }

}
