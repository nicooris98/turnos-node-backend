import { Request, Response } from "express"
import { User } from "../entities/User"
import { Role } from "../entities/Role"

export const createUser = async (req: Request, res: Response) => {

    const { firstName, lastName, roleId, speciality, phoneNumber } = req.body

    const role = await Role.findOne({
        where: {
            id: roleId
        }
    })

    const newUser = new User()

    if(role) {
        newUser.firstName = firstName
        newUser.lastName = lastName
        newUser.role = role
        newUser.speciality = speciality
        newUser.phoneNumber = phoneNumber

        newUser.save()

        res.json(newUser);
    } else res.status(400).json({message: "No mando role"})
}