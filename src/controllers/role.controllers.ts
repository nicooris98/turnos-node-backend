import { Request, Response } from "express"
import { Role } from "../entities/Role";

export const createRole = async (req: Request, res: Response) => {
    const newRole = new Role()
    newRole.name = req.body.name
    newRole.save()
    res.json(newRole);
}

export const findRoleById = async (req: Request, res: Response) => {
    try {
        const role = await Role.findOne({
            where: {
                id: +req.params.roleId
            }
        })
        return res.json(role)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const findRoles = async (req: Request, res: Response) => {
    try {
        const role = await Role.find()
        return res.json(role)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const removeRole = async (req: Request, res: Response) => {
    const role = await Role.findOne({
        where: {
            id: +req.params.roleId
        }
    })

    if(role) {
        await role?.softRemove()
        res.json({message: "Removed succesfully"})
    } else res.status(404).json({message: "role not found"})
}

export const updateRole = async (req: Request, res: Response) => {
    const updateRole = await Role.findOne({
        where: {
            id: +req.params.roleId
        }
    })
    if(updateRole && req.body.name) {
        updateRole.name = req.body.name
        updateRole.save()
        res.json(updateRole);
    } else res.status(404).json({message: "role not found"})
}