import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedule } from "./Schedule";

@Entity("shifts")
export class Shift extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ nullable: true })
    phoneNumber: string

    @Column({ nullable: true})
    social: string

    @Column()
    observation: string

    @Column({ nullable: true })
    dni: string

    @Column({ default: false })
    isCancelled: boolean

    @Column({ type: "date", nullable: true })
    date: Date

    @CreateDateColumn({ type: "timestamp", nullable: true })
    createdAt: Date

    @UpdateDateColumn({ type: "timestamp", nullable: true })
    updatedAt: Date

    @DeleteDateColumn({ type: "timestamp", nullable: true })
    deletedAt: Date

    //Relations
    @ManyToOne(() => Schedule, (schedule) => schedule.id)
    schedule: Schedule
}