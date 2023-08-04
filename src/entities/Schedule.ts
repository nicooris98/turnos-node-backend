import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User"
import { DaysOfWeek } from "../enums/days.enum";

@Entity("schedules")
export class Schedule extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "time"})
    timeFrom: Date

    @Column({type: "time"})
    timeTo: Date

    @Column({
        type: "enum",
        enum: DaysOfWeek
    })
    dayOfWeek: DaysOfWeek

    @CreateDateColumn({type: "timestamp", nullable: true})
    createdAt: Date

    @UpdateDateColumn({type: "timestamp", nullable: true})
    updatedAt: Date

    @DeleteDateColumn({type: "timestamp", nullable: true})
    deletedAt: Date

    //Relations
    @ManyToOne(() => User, (user) => user.id)
    user: User
}