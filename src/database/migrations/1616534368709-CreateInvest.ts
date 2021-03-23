import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInvest1616534368709 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "invests",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "mes",
            type: "timestamp",
          },
          {
            name: "value",
            type: "money",
          },
          {
            name: "data",
            type: "timestamp with time zone",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("invests");
  }
}
