import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"
import conn from "../db"
import { RowDataPacket } from "mysql2"

export const getMonthPlus = (req : Request,res : Response) => {
    let query = `SELECT * FROM accountbook.asset_plus
                 WHERE YEAR(uploaded_at) = ? AND MONTH(uploaded_at) = ?;`
    let {year, month} = req.body
    let values = [year, month]
    conn.query<RowDataPacket[]>(query, values,(_err, rows) => {
        if(rows.length >= 1){
            return res.status(StatusCodes.OK).json(rows)
        }else{
            return res.status(StatusCodes.BAD_REQUEST).end()
        }
    })
    
}

export const getMonthMinus = (req : Request,res : Response) => {
    let query = `SELECT * FROM accountbook.asset_minus
                 WHERE YEAR(uploaded_at) = ? AND MONTH(uploaded_at) = ?;`
    let {year, month} = req.body
    let values = [year, month]
    conn.query<RowDataPacket[]>(query, values,(_err, rows) => {
        if(rows.length>=1){
            return res.status(StatusCodes.OK).json(rows)
        }else{
            return res.status(StatusCodes.BAD_REQUEST).end()
        }
    })
}


export const getMonthTotal = (req : Request,res : Response) => {
    let query = ''
    conn.query<RowDataPacket[]>(query, (_err, rows) => {
        if(rows.length>=1){
            return res.status(StatusCodes.OK).json(rows)
        }else{
            return res.status(StatusCodes.BAD_REQUEST).end()
        }
    })
}
