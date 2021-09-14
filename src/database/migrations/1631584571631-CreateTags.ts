import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1631584571631 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tags", 
                columns: [{
                   name: "uid",
                   type: "uuid",
                   isPrimary: true 
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp", 
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags")
    }

}
