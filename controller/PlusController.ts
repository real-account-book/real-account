import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"
import  conn  from "../db"
import { ResultSetHeader } from "mysql2"

export const addPlus = (req : Request,res : Response) => {
    let query = `INSERT  INTO  accountbook.asset_plus 
    (plus,title,content,uploaded_at)
    VALUES (?, ?, ?, ?);`
    let {plus, title, content, uploaded_at} = req.body
    let values = [plus, title, content, uploaded_at]

    conn.query<ResultSetHeader>(query, values, (_err, result) => {
        if(result.affectedRows===1){
            return res.status(StatusCodes.OK).json(result)
        }else{
            return res.status(StatusCodes.BAD_REQUEST).end()
        }
    })
}

export const deletePlus = (req : Request,res : Response) => {
    let query = 'DELETE FROM accountbook.asset_plus WHERE plus_id = ?;'
    let {plusId} = req.params
    conn.query<ResultSetHeader>(query, plusId,(_err, result) => {
        if(result.affectedRows===1){
            return res.status(StatusCodes.OK).json(result)
        }else{
            return res.status(StatusCodes.BAD_REQUEST).end()
        }
    })
}


export const editPlus = (req : Request,res : Response) => {
    let query = `UPDATE accountbook.asset_plus 
    SET plus = ?,title = ?,content = ? 
    WHERE plus_id = ?;`
    let {plus,title,content,plusId} = req.body
    plusId = parseInt(plusId)
    let values = [plus,title,content,plusId]
    conn.query<ResultSetHeader>(query, values,(_err, result) => {
        if(result.affectedRows===1){
            return res.status(StatusCodes.OK).json(result)
        }else{
            return res.status(StatusCodes.BAD_REQUEST).end()
        }
    })
}
