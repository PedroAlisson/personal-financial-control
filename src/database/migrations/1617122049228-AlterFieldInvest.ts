import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterFieldInvest1617122049228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `alter table "invests" rename column "data" to "date"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `alter table "invests" rename column "date" to "data" `
    );
  }
}
