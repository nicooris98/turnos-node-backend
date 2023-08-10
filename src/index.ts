import "reflect-metadata"
import app from "./app"
import { AppDataSource } from "./db"

async function main() {
    try {
        await AppDataSource.initialize()
        console.log("Database connected")
        app.listen(process.env.API_PORT)
        console.log("Server is listening on port ", process.env.API_PORT)
    } catch (error) {
        console.error(error)
    }
}

main()