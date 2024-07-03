// 일별 조회 API
import express, { Router } from "express";

export const dayRouter : Router = express.Router();
dayRouter.use(express.json());

// 일별 전체 입금 내역 조회
dayRouter.get('/plus',() => {});

// 일별 저네 출금 내역 조회
dayRouter.get('/minus',() => {});

// 일별 총수입/총지출 조회
dayRouter.get('/total',() => {});