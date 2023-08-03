import { Router } from "express";
import { createRole, findRoleById, findRoles, removeRole, updateRole } from "../controllers/role.controllers";

const roleRoutes = Router()

roleRoutes.post("/roles", createRole)

roleRoutes.get("/roles", findRoles)

roleRoutes.get("/roles/:id", findRoleById)

roleRoutes.put("/roles/:id", updateRole)

roleRoutes.delete("/roles/:id", removeRole)

export default roleRoutes