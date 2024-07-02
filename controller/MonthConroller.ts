import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"


export const getMonthPlus = (req : Request,res : Response) => {
    return res.status(StatusCodes.OK).json({
        message: '월별 입금 조회'
    })
}

export const getMonthMinus = (req : Request,res : Response) => {
    return res.status(StatusCodes.OK).end()
}


export const getMonthTotal = (req : Request,res : Response) => {
    return res.status(StatusCodes.OK).end()
}
