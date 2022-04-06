import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    number!: number

    @Column({ type:"text" })
    writer!: string

    @Column({ type:"text" })
    title!: string
    
    @Column({ type:"text" })
    contents!: string
}