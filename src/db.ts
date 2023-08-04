import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Role } from "./entities/Role"
import { SnakeNamingStrategy } from "typeorm-naming-strategies"
import { Schedule } from "./entities/Schedule"
import { Shift } from "./entities/Shift"
require('dotenv').config({ path: './.env' });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User, Role, Schedule, Shift],
    subscribers: [],
    migrations: [],
    namingStrategy: new SnakeNamingStrategy()
})