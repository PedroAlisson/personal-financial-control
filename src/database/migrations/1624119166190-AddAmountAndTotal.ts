import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddAmountAndTotal1624119166190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "invests",
      new TableColumn({
        name: "amount",
        type: "int",
        isNullable: true,
      })
    );
    await queryRunner.addColumn(
      "invests",
      new TableColumn({
        name: "total",
        type: "int",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("invests", "amount");
    await queryRunner.dropColumn("invests", "total");
  }
}
