import { Router } from "express";
import { createUser, findUserById, findUsers, removeUser, updateUser } from "../controllers/user.controllers";

const userRoutes = Router()

userRoutes.post("/users", createUser)

userRoutes.get("/users", findUsers)

userRoutes.get("/users/:id", findUserById)

userRoutes.put("/users/:id", updateUser)

userRoutes.delete("/users/:id", removeUser)

export default userRoutes