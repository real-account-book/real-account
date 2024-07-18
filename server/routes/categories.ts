
import express, {Router} from "express";
import { addCategory, deleteCategory, getCategory } from "../controller/categoryController";

export const categoryRouter : Router = express.Router()
categoryRouter.use(express.json());

categoryRouter.route('/')
.post(addCategory)
.get(getCategory)

categoryRouter.route('/:categoryId')
.get(getCategory)
.delete(deleteCategory)