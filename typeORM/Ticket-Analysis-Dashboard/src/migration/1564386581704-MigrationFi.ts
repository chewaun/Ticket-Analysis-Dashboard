import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFi1564386581704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "resolution_category" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_e5040bfbad0a29f5c823a66a991" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ticket" ("id" int NOT NULL IDENTITY(1,1), "number" int NOT NULL, "description" nvarchar(255) NOT NULL, "priority" nvarchar(255) NOT NULL, "open_date" datetime NOT NULL, "closed_date" datetime NOT NULL, "resolution_category_id" int NOT NULL, "remark" nvarchar(255) NOT NULL, CONSTRAINT "PK_d9a0835407701eb86f874474b7c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "ticket"`);
        await queryRunner.query(`DROP TABLE "resolution_category"`);
    }

}
