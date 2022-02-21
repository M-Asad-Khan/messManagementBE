import { MigrationInterface, QueryRunner } from 'typeorm';

export class syncdata1643976035954 implements MigrationInterface {
  name = 'syncdata1643976035954';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "mess" ("id" SERIAL NOT NULL, "menuDetail" character varying NOT NULL, "price" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_14a28e408d1e9a362f6f6648de9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "weekly_menu" ("id" SERIAL NOT NULL, "menuName" character varying NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_12933dfa296b522367a966f88a8" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "weekly_menu"`);
    await queryRunner.query(`DROP TABLE "mess"`);
  }
}
