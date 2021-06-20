import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddMesBills1624193133313 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "bills",
      new TableColumn({
        name: "mes",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("bills", "mes");
  }
}
