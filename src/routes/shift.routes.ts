import { Router } from "express";
import { createShift, findShiftById, findShifts, removeShift, updateShift } from "../controllers/shift.controllers";

const shiftRoutes = Router()

shiftRoutes.post("/shifts", createShift)

shiftRoutes.get("/shifts", findShifts)

shiftRoutes.get("/shifts/:id", findShiftById)

shiftRoutes.put("/shifts/:id", updateShift)

shiftRoutes.delete("/shifts/:id", removeShift)

export default shiftRoutes