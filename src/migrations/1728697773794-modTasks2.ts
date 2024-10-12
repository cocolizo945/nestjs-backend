import { MigrationInterface, QueryRunner } from "typeorm";

export class ModTasks21728697773794 implements MigrationInterface {
    name = 'ModTasks21728697773794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"."tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`);
        await queryRunner.query(`ALTER TABLE "task"."tasks" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "task"."tasks" ADD CONSTRAINT "FK_2f6387f887c233a2dc807146559" FOREIGN KEY ("belongs_to") REFERENCES "task"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"."tasks" DROP CONSTRAINT "FK_2f6387f887c233a2dc807146559"`);
        await queryRunner.query(`ALTER TABLE "task"."tasks" ADD "userId" bigint`);
        await queryRunner.query(`ALTER TABLE "task"."tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "task"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
