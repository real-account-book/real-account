// 지출 내역 API
import express, { Router } from "express";
import { addMinus, deleteMinus, editMinus } from "../controller/MinusController";

export const dayRouter : Router = express.Router();
dayRouter.use(express.json());

// 일별 전체 입금 내역 조회
dayRouter.route('/')
.post(addMinus)
.delete(deleteMinus);

dayRouter
.put(':minusId', editMinus);