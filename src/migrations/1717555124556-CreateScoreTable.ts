import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateScoreTable1717555124556 implements MigrationInterface {
    name = 'CreateScoreTable1717555124556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "score" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "score" integer NOT NULL, CONSTRAINT "PK_1770f42c61451103f5514134078" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "score"`);
    }

}
