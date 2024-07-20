import express, { Router } from "express";
import { getTotalMinus, getTotalPlus } from "../controller/totalContrloller";

export const totalRouter: Router = express.Router();
totalRouter.use(express.json());

totalRouter.get("/plus/:start_at/:end_at", getTotalPlus);

totalRouter.get("/minus/:start_at/:end_at", getTotalMinus);

totalRouter.get("/minus/:start_at/:end_at/:categoryId", getTotalMinus);
