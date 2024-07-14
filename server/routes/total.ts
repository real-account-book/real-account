import { getTotalPlus,getTotalMinus } from "../Controller/TotalContrloller";
import express, {Router} from "express";

export const totalRouter : Router = express.Router()
totalRouter.use(express.json());

totalRouter.get('/plus', getTotalPlus)

totalRouter.get('/minus', getTotalMinus)