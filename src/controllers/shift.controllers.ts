import { Request, Response } from "express"
import { Schedule } from "../entities/Schedule"
import { Shift } from "../entities/Shift"

export const createShift = async (req: Request, res: Response) => {

    const { firstName, lastName, scheduleId, social, phoneNumber, observation, dni, date } = req.body

    const schedule = await Schedule.findOne({
        where: {
            id: scheduleId
        }
    })

    const newShift = new Shift()

    if(schedule) {
        newShift.firstName = firstName
        newShift.lastName = lastName
        newShift.schedule = schedule
        newShift.observation = observation
        newShift.phoneNumber = phoneNumber
        newShift.social = social
        newShift.dni = dni
        newShift.date = date

        newShift.save()

        res.json(newShift);
    } else res.status(400).json({message: "schedule not provided"})
}

export const findShiftById = async (req: Request, res: Response) => {
    try {
        const shift = await Shift.findOne({
            where: {
                id: +req.params.shiftId
            }
        })
        return res.json(shift)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const findShifts = async (req: Request, res: Response) => {
    try {
        const shifts = await Shift.find()
        return res.json(shifts)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const removeShift = async (req: Request, res: Response) => {
    const shift = await Shift.findOne({
        where: {
            id: +req.params.shiftId
        }
    })

    if(shift) {
        await shift?.softRemove()
        res.json({message: "Removed succesfully"})
    } else res.status(404).json({message: "shift not found"})
}

export const updateShift = async (req: Request, res: Response) => {
    const updateShift = await Shift.findOne({
        where: {
            id: +req.params.shiftId
        }
    })
    if(updateShift && req.body) {
        const { firstName, lastName, social, phoneNumber, observation, date } = req.body

        updateShift.firstName = firstName
        updateShift.lastName = lastName
        updateShift.observation = observation
        updateShift.phoneNumber = phoneNumber
        updateShift.social = social
        updateShift.date = date
        updateShift.save()
        res.json(updateShift);
    } else res.status(404).json({message: "shift not found"})
}