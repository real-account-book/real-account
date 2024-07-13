import { getDayPlus,getDayMinus } from "../Controller/DayContrloller";
import express, {Router} from "express";

export const dayRouter : Router = express.Router()
dayRouter.use(express.json());

dayRouter.get('/plus', getDayPlus)

dayRouter.get('/minus', getDayMinus)