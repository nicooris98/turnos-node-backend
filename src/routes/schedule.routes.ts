import { Router } from "express";
import { createSchedule, findScheduleById, findSchedules, removeSchedule, updateSchedule } from "../controllers/schedule.controllers";

const scheduleRoutes = Router()

scheduleRoutes.post("/schedules", createSchedule)

scheduleRoutes.get("/schedules", findSchedules)

scheduleRoutes.get("/schedules/:id", findScheduleById)

scheduleRoutes.put("/schedules/:id", updateSchedule)

scheduleRoutes.delete("/schedules/:id", removeSchedule)

export default scheduleRoutes