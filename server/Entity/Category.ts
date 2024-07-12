import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { Asset_minus } from "./Asset_minus"


@Entity()
export class Category {
    @PrimaryGeneratedColumn({type:"int"})
    category_id : number
       
    @Column("varchar",{length:45})
    category_name : string

}
