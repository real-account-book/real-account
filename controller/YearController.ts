import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"
import conn from "../db"
import { ResultSetHeader } from "mysql2"

export const getYearPlus = (req : Request, res : Response) => {
    console.log("연도별 수입 조회");
    let query = ''
    
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}