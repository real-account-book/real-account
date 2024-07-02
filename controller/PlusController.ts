import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"
import  conn  from "../db"
import { ResultSetHeader } from "mysql2"

export const addPlus = (req : Request,res : Response) => {
    let query = `INSERT  INTO  accountbook.asset_plus 
    (plus,title,content,uploaded_at)
    VALUES (?, ?, ?, ?);`
    console.log(conn);
    let {plus, title, content, uploaded_at} = req.body
    let values = [plus, title, content, uploaded_at]

    conn.query<ResultSetHeader>(query, values, (_err, result) => {
        
        return res.status(StatusCodes.OK).json(result)
    })
}

export const deletePlus = (req : Request,res : Response) => {
    let query = ''
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}


export const editPlus = (req : Request,res : Response) => {
    let query = ''
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}
