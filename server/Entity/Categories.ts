import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Categories {
    @PrimaryGeneratedColumn({type:"int"})
    category_id : number
       
    @Column("varchar",{length:45})
    category_name : string

}
