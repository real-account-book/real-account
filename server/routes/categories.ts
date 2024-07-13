
import express, {Router} from "express";
import { addCategory } from "../Controller/CategoryController";

export const categoryRouter : Router = express.Router()
categoryRouter.use(express.json());

categoryRouter.post('/', addCategory)
