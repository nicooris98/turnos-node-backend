import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "./Role";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    roleId: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ nullable: true})
    phoneNumber: string

    @Column()
    speciality: string

    @CreateDateColumn({type: "timestamp", nullable: true})
    createdAt: Date

    @UpdateDateColumn({type: "timestamp", nullable: true})
    updatedAt: Date

    @DeleteDateColumn({type: "timestamp", nullable: true})
    deletedAt: Date

    //Relations
    @ManyToOne(() => Role, (role) => role.id)
    role: Role
}