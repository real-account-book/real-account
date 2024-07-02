import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"
import conn from "../db"
import { ResultSetHeader } from "mysql2"

export const getMonthPlus = (req : Request,res : Response) => {
    let query = ''
  
    
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
    
}

export const getMonthMinus = (req : Request,res : Response) => {
    let query = ''
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}


export const getMonthTotal = (req : Request,res : Response) => {
    let query = ''
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}
