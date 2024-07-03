import conn from "../db"
import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"

export const addMinus = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};

export const deleteMinus = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};

export const editMinus = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};
