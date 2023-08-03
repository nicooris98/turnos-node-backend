import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("roles")
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @CreateDateColumn({type: "timestamp", nullable: true})
    createdAt: Date

    @UpdateDateColumn({type: "timestamp", nullable: true})
    updatedAt: Date

    @DeleteDateColumn({type: "timestamp", nullable: true})
    deletedAt: Date
}