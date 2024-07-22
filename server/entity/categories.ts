import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm"
import { Asset_minus } from "./asset_minus"


@Entity()
@Unique(["category_name"])
export class Categories {
    @PrimaryGeneratedColumn({type:"int"})
    category_id : number

    @Column("varchar",{length:45})
    category_name : string

    @OneToMany(() => Asset_minus, (asset_minus) => asset_minus.category)
    asset_minus: Asset_minus[]
}
