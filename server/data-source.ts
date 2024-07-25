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
  entities: [__dirname + "/entity/*.js"],
});
