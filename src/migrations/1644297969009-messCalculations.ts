import { MigrationInterface, QueryRunner } from 'typeorm';

export class messCalculations1644297969009 implements MigrationInterface {
  name = 'messCalculations1644297969009';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "carryForward" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "IndividualDeposit" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "devboxDeposit" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "totalDeposit" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "Expanses" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "cashInHand" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "perDayCharge" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "menuName" character varying NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "messDate" TIMESTAMP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "messDate"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "menuName"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "perDayCharge"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cashInHand"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "Expanses"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "totalDeposit"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "devboxDeposit"`);
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "IndividualDeposit"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "carryForward"`);
  }
}
