import { getTotalPlus,getTotalMinus } from "../controller/totalContrloller";
import express, {Router} from "express";

export const totalRouter : Router = express.Router()
totalRouter.use(express.json());

totalRouter.get('/plus/:start_at/:end_at', getTotalPlus)

totalRouter.get('/minus/:start_at/:end_at', getTotalMinus)

totalRouter.get('/minus/:start_at/:end_at/:categoryId', getTotalMinus)