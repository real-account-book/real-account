import "reflect-metadata"
import { DataSource } from "typeorm"
import { Asset_plus } from "./Entity/Asset_plus"
import {Asset_minus} from './Entity/Asset_minus'
import { Category } from "./Entity/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [__dirname + "./Entity/*.ts",Asset_plus],
    migrations: [],
    subscribers: [],
})
