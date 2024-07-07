import conn from "../db";
import mariadb from 'mysql2/promise';
import { Request,Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getDayPlus = (req : Request,res : Response) => {
  let { year, month, day } = req.body;

  let values = [year, month, day];
  let query = `SELECT *
              FROM Asset_plus
              WHERE YEAR(uploaded_at) = ?
                AND MONTH(uploaded_at) = ?
                AND DAY(uploaded_at) = ?`;
  conn.query(query, values, (_err, result) => {
    return res.status(StatusCodes.OK).json(result);
  })
};

export const getDayMinus = (req : Request,res : Response) => {
  let { year, month, day } = req.body;

  let values = [year, month, day];
  let query = `SELECT *
              FROM Asset_minus
              WHERE YEAR(uploaded_at) = ?
                AND MONTH(uploaded_at) = ?
                AND DAY(uploaded_at) = ?`;
  conn.query(query, values, (_err, result) => {
    return res.status(StatusCodes.OK).json(result);
  })
};

// export const getDayTotal = async (req : Request,res : Response) => {
//   let date = String(req.query.date);
//   const regex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
//   if (!date || !regex.test(date)) return res.status(StatusCodes.BAD_REQUEST).end();
  
//   let total_minus;
//   let total_plus;

//   const [year, month, day] = date.split('-');
//   let values = [year, month, day];

//   const conn = await mariadb.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'root',
//     database: '',
//     dateStrings: true
//   });

//   let query = `SELECT SUM(plus) AS total_plus
//               FROM Asset_plus
//               WHERE YEAR(uploaded_at) = ?
//                 AND MONTH(uploaded_at) = ?
//                 AND DAY(uploaded_at) = ?`;
//   let result : any = await conn.execute(query, values);
//   total_plus = Number(result[0][0].total_plus);

//   query = `SELECT SUM(minus) AS total_minus
//               FROM Asset_minus
//               WHERE YEAR(uploaded_at) = ?
//                 AND MONTH(uploaded_at) = ?
//                 AND DAY(uploaded_at) = ?`;
//   result = await conn.execute(query, values)
//   total_minus = Number(result[0][0].total_minus);
//   return res.status(StatusCodes.OK).json({
//     total: total_plus - total_minus,
//     total_minus: total_minus,
//     total_plus: total_plus,
//     uploaded_at: date
//   });
// };
