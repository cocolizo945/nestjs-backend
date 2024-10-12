import { MigrationInterface, QueryRunner } from "typeorm";

export class TaskTable1728692219798 implements MigrationInterface {
    name = 'TaskTable1728692219798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task"."tasks" ("id" SERIAL NOT NULL, "task_name" text NOT NULL, "task_description" text NOT NULL, "belongs_to" bigint NOT NULL, "status" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"."tasks"`);
    }

}
