import express, {Router} from "express";
import { addCategory, deleteCategory, getCategory } from "../controller/categoryController";
import { validate } from "../validator/validator";
import { withCheckMsg } from "../validator/validator"; 

const categoryRouter : Router = express.Router()
categoryRouter.use(express.json());

const checkCategoryId = [
    withCheckMsg('categoryId').notEmpty().isNumeric(),
    validate
]
categoryRouter.route('/')
.post([
    withCheckMsg('category_name').notEmpty().isString(),
    validate
],addCategory)
.get(getCategory)

categoryRouter.route('/:categoryId')
.delete(...checkCategoryId,deleteCategory)
.get(...checkCategoryId,getCategory)


export default categoryRouter