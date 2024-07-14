import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST_KEY,
    port: 3306,
    username: process.env.USER_KEY,
    password: process.env.PASSWORD_KEY, 
    database: process.env.DATABASE_KEY, // Accountbook => accountbook으로 수정
    synchronize: true,
    logging: false,
    entities: ["server/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
