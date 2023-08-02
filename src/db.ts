import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Role } from "./entities/Role"
import { SnakeNamingStrategy } from "typeorm-naming-strategies"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "shift_db",
    synchronize: true,
    logging: true,
    entities: [User, Role],
    subscribers: [],
    migrations: [],
    namingStrategy: new SnakeNamingStrategy()
})