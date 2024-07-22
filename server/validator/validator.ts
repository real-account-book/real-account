import { NextFunction, Request, Response } from "express"
import { check, validationResult } from "express-validator"
import { StatusCodes } from "http-status-codes"

export const validate = (req:Request,res: Response,next: NextFunction)=>{
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(StatusCodes.BAD_REQUEST).json(err.array());   
    }
    return next();
}

export const withCheckMsg = (field : string) => {
    return check(`${field}`, `${field} 형식 오류`)
}