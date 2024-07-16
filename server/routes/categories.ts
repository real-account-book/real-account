
import express, {Router} from "express";
import { addCategory, getCategory } from "../Controller/categoryController";

export const categoryRouter : Router = express.Router()
categoryRouter.use(express.json());

categoryRouter.route('/')
.post(addCategory)
.get(getCategory)

categoryRouter.get('/:categoryId', getCategory)


// categoryRouter.delete('/:category_id', deleteCategory)