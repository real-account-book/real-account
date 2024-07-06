import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"
import conn from "../db"
import { ResultSetHeader } from "mysql2"

export const getCategoryMinus = (req : Request, res : Response) => {
    console.log("카테고리별 월별 지출내역 조회");
    let query = ''
    
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}

export const getCategoryMinusDetail = (req : Request, res : Response) => {
    console.log("카테고리별 월별 지출내역 개별 조회");
    let query = ''
    
    conn.query<ResultSetHeader>(query, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}

export const addCategoryMinus = (req : Request, res : Response) => {
    console.log("카테고리 항목 추가"); //카테고리별 지출내역 추가?
    let query = `INSERT  INTO  Accountbook.categories 
    (category_name)
    VALUES (?);`
    console.log(conn);
    let {category_name} = req.body
    let values = [category_name]

    conn.query<ResultSetHeader>(query, values, (_err, result) => {
        return res.status(StatusCodes.OK).json(result)
    })
}