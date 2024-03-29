import express from "express"
import morgan from "morgan"
import cors from "cors"
import userRoutes from "./routes/user.routes"
import roleRoutes from "./routes/role.routes"
import scheduleRoutes from "./routes/schedule.routes"
import shiftRoutes from "./routes/shift.routes"

const app = express()

app.use(morgan("dev"))
app.use(cors({
  origin: "*",
}))
app.use(express.json())

app.use(userRoutes)
app.use(roleRoutes)
app.use(scheduleRoutes)
app.use(shiftRoutes)

export default app