import { NextFunction, Request, Response } from "express"
import { check, validationResult } from "express-validator"
import { StatusCodes } from "http-status-codes"

export const validate = (req:Request,res: Response,next: NextFunction)=>{
    const err = validationResult(req);
    if(err.isEmpty()){
        return next();
    }else{
        return res.status(StatusCodes.BAD_REQUEST).json(err.array());
    }
}

export const withCheckMsg = (item : string) => {
    return check(`${item}`, `${item} 형식 오류`)
}