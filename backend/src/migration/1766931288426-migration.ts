import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1766931288426 implements MigrationInterface {
    name = 'Migration1766931288426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                "username" varchar NOT NULL,
                "roles" text NOT NULL,
                "status" varchar CHECK("status" IN ('enabled', 'disabled', 'deleted')) NOT NULL,
                CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "users"
        `);
    }

}
