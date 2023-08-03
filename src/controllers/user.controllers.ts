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

export const findUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({
            where: {
                id: +req.params.userId
            }
        })
        return res.json(user)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const findUsers = async (req: Request, res: Response) => {
    try {
        const user = await User.find()
        return res.json(user)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const removeUser = async (req: Request, res: Response) => {
    const user = await User.findOne({
        where: {
            id: +req.params.userId
        }
    })

    if(user) {
        await user?.softRemove()
        res.json({message: "Removed succesfully"})
    } else res.status(404).json({message: "user not found"})
}

export const updateUser = async (req: Request, res: Response) => {
    const updateUser = await User.findOne({
        where: {
            id: +req.params.userId
        }
    })
    if(updateUser && req.body) {
        const { firstName, lastName, speciality, phoneNumber } = req.body
        updateUser.firstName = firstName
        updateUser.lastName = lastName
        updateUser.speciality = speciality
        updateUser.phoneNumber = phoneNumber
        updateUser.save()
        res.json(updateUser);
    } else res.status(404).json({message: "user not found"})
}