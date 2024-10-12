import { MigrationInterface, QueryRunner } from "typeorm";

export class OnCascade1728706266691 implements MigrationInterface {
    name = 'OnCascade1728706266691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"."tasks" DROP CONSTRAINT "FK_2f6387f887c233a2dc807146559"`);
        await queryRunner.query(`ALTER TABLE "task"."tasks" ADD CONSTRAINT "FK_2f6387f887c233a2dc807146559" FOREIGN KEY ("belongs_to") REFERENCES "task"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"."tasks" DROP CONSTRAINT "FK_2f6387f887c233a2dc807146559"`);
        await queryRunner.query(`ALTER TABLE "task"."tasks" ADD CONSTRAINT "FK_2f6387f887c233a2dc807146559" FOREIGN KEY ("belongs_to") REFERENCES "task"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
