import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm"
import {Category} from './Category'
 
@Entity()
export class Asset_minus {

    @PrimaryGeneratedColumn()
    minus_id: number 

    @Column({type: "int"})
    minus: number

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

    @OneToOne(type => Category)
    @JoinColumn()
    category : Category
}
