import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: ":memory:",
  dropSchema: true,
  synchronize: true,
  logging: false,
  // type: "mysql",
  // port: 3306,
  // host: process.env.HOST_KEY,
  // username: process.env.USER_KEY,
  // password: process.env.PASSWORD_KEY,
  // database: process.env.DATABASE_KEY, // Accountbook => accountbook으로 수정
  // synchronize: true,
  // logging: false,
  entities: [__dirname + "/entity/*.ts"],
  // migrations: [],
  // subscribers: [],
});
