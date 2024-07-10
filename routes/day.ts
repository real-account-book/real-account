// 일별 조회 API
import express, { Router } from "express";
import { getDayPlus, getDayMinus } from "../controller/DayController"

export const dayRouter : Router = express.Router();
dayRouter.use(express.json());

// 일별 전체 입금 내역 조회
dayRouter.get('/plus', getDayPlus);

// 일별 전체 출금 내역 조회
dayRouter.get('/minus', getDayMinus);

// 일별 총수입/총지출 조회
// dayRouter.get('/total', getDayTotal);