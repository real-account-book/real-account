import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"


export const addPlus = (req : Request,res : Response) => {
    return res.status(StatusCodes.OK).end()
}

export const deletePlus = (req : Request,res : Response) => {
    return res.status(StatusCodes.OK).end()
}


export const editPlus = (req : Request,res : Response) => {
    return res.status(StatusCodes.OK).end()
}
