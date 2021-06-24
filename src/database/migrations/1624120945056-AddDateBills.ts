import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDateBills1624120945056 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "bills",
      new TableColumn({
        name: "date",
        type: "timestamp with time zone",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("bills", "date");
  }
}
