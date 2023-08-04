import { Request, Response } from "express"
import { User } from "../entities/User"
import { Schedule } from "../entities/Schedule"

export const createSchedule = async (req: Request, res: Response) => {

    const { timeFrom, timeTo, dayOfWeek, userId } = req.body

    const user = await User.findOne({
        where: {
            id: userId
        }
    })

    const newSchedule = new Schedule()

    if(user) {
        newSchedule.timeFrom = timeFrom
        newSchedule.timeTo = timeTo
        newSchedule.user = user
        newSchedule.dayOfWeek = dayOfWeek

        newSchedule.save()

        res.json(newSchedule);
    } else res.status(400).json({message: "user not provided"})
}

export const findScheduleById = async (req: Request, res: Response) => {
    try {
        const schedule = await Schedule.findOne({
            where: {
                id: +req.params.scheduleId
            }
        })
        return res.json(schedule)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const findSchedules = async (req: Request, res: Response) => {
    try {
        const schedules = await Schedule.find()
        return res.json(schedules)
    } catch (error) {
        if(error instanceof Error) {
            return res.status(500).json({message: error.message})
        }
    }
}

export const removeSchedule = async (req: Request, res: Response) => {
    const schedule = await Schedule.findOne({
        where: {
            id: +req.params.scheduleId
        }
    })

    if(schedule) {
        await schedule?.softRemove()
        res.json({message: "Removed succesfully"})
    } else res.status(404).json({message: "schedule not found"})
}

export const updateSchedule = async (req: Request, res: Response) => {
    const updateSchedule = await Schedule.findOne({
        where: {
            id: +req.params.scheduleId
        }
    })
    if(updateSchedule && req.body) {
        const { timeFrom, timeTo, dayOfWeek } = req.body
        updateSchedule.timeFrom = timeFrom
        updateSchedule.timeTo = timeTo
        updateSchedule.dayOfWeek = dayOfWeek
        updateSchedule.save()
        res.json(updateSchedule);
    } else res.status(404).json({message: "schedule not found"})
}