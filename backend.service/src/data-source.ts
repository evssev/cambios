import "reflect-metadata";
import { DataSource } from "typeorm";
import { Videojuegos } from "./entities/Videojuegos";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Videojuegos],
  migrations:[],
  subscribers:[]
});