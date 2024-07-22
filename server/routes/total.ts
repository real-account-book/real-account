import express, { Router } from "express";
import { getTotalMinus, getTotalPlus } from "../controller/totalContrloller";
import { validate, withCheckMsg } from "../validator/validator";

const totalRouter: Router = express.Router();
totalRouter.use(express.json());

const checkTotalVali = [
    withCheckMsg("start_at").notEmpty().isDate(),
    withCheckMsg("end_at").notEmpty().isDate(),
]

totalRouter.get("/plus/:start_at/:end_at",
    ...checkTotalVali,
    validate,
    getTotalPlus);

totalRouter.get("/minus/:start_at/:end_at/:categoryId?", 
    ...checkTotalVali,
    withCheckMsg("categoryId").isNumeric(),
    validate,
    getTotalMinus);


export default totalRouter;