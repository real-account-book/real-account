import express, {Router} from "express";
import { getMonthPlus,getMonthMinus,getMonthTotal } from "../controller/MonthConroller";

export const monthRouter : Router = express.Router()
monthRouter.use(express.Router())

monthRouter.get('/plus',getMonthPlus)
monthRouter.get('/minus',getMonthMinus)
monthRouter.get('/total',getMonthTotal)
