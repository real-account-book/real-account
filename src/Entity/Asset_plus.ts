import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn } from "typeorm"


@Entity()
export class Asset_plus {

    @PrimaryGeneratedColumn()
    plus_id: number 

    @Column({type: "int"})
    plus: number

    @Column("varchar",{length:20})
    title: string

    @Column("varchar",{length:100})
    content: string

    @Column("date")
    uploaded_at: Date
    
    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
}
