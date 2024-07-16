import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import {Categories} from './categories'
 
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

    @ManyToOne(() => Categories, (categories) => categories.asset_minus)
    @JoinColumn({name: "category_id"})
    category : Categories
}
