import express, {Router} from "express";
import { addCategory, deleteCategory, getCategory } from "../controller/categoryController";
import { validate } from "../validator/validator";
import { withCheckMsg } from "../validator/validator"; 

export const categoryRouter : Router = express.Router()
categoryRouter.use(express.json());

categoryRouter.route('/')
.post([
    withCheckMsg('category_name').notEmpty().isString()
    ,validate
],addCategory)
.get(getCategory)

categoryRouter.route('/:categoryId')
.delete([
    withCheckMsg('categoryId').notEmpty().isInt(),
    validate
],deleteCategory)
.get([
    withCheckMsg('categoryId').notEmpty().isInt(),
    validate
],getCategory)
