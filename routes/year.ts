import express, {Router} from "express";
import { getYearPlus } from "../controller/YearController";

export const yearRouter : Router = express.Router()
yearRouter.use(express.json());

yearRouter.get('/yearPlus',getYearPlus)
