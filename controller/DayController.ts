import conn from "../db";
import { Request,Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getDayPlus = (req : Request,res : Response) => {
  let date = String(req.query.date);
  const regex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  if (!date || !regex.test(date)) return res.status(StatusCodes.BAD_REQUEST).end();

  const [year, month, day] = date.split('-');
  let query = `SELECT *
                FROM Asset_plus
                WHERE YEAR(uploaded_at) = ?
                  AND MONTH(uploaded_at) = ?
                  AND DAY(uploaded_at) = ?`;
  let values = [year, month, day];
  conn.query(query, values, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};

export const getDayMinus = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};

export const getDayTotal = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};
