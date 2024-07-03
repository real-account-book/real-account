import conn from "../db"
import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"

export const getMonthPlus = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};

export const getMonthMinus = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};

export const getMonthTotal = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};
