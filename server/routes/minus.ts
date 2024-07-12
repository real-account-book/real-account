// // 지출 내역 API
// import express, { Router } from "express";
// import { addMinus, deleteMinus, editMinus } from "../controller/MinusController";

// export const minusRouter : Router = express.Router();
// minusRouter.use(express.json());

// // 일별 전체 입금 내역 조회
// minusRouter.route('/')
// .post(addMinus);

// minusRouter.route('/:minusId')
// .put(editMinus)
// .delete(deleteMinus);