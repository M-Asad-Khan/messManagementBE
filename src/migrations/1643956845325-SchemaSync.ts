import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1643956845325 implements MigrationInterface {
  name = 'SchemaSync1643956845325';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "date" TIMESTAMP NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "date"`);
  }
}
