import express, {Router} from "express";
import { getMonthPlus,getMonthMinus } from "../Controller/MonthController";

export const monthRouter : Router = express.Router()
monthRouter.use(express.json());

monthRouter.get('/plus',getMonthPlus)
monthRouter.get('/minus',getMonthMinus)
