import { MigrationInterface, QueryRunner } from "typeorm";

export class ModTasks21728704188082 implements MigrationInterface {
    name = 'ModTasks21728704188082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"."user" DROP COLUMN "token"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"."user" ADD "token" text NOT NULL`);
    }

}
