import { addPlus, deletePlus, updatePlus } from "../controller/plusController";
import express, {Router} from "express";
import { validate, withCheckMsg } from "../validator/validator";

const plusRouter : Router = express.Router()
plusRouter.use(express.json());

const checkPlusMsg = [
    withCheckMsg('plus').notEmpty().isNumeric(),
    withCheckMsg('title').notEmpty().isString(), 
    withCheckMsg('content').notEmpty().isString(), 
]

plusRouter.route('/')
.post(...checkPlusMsg,
    withCheckMsg('uploaded_at').notEmpty().isDate(),
    validate,
    addPlus)
plusRouter.route('/:plusId')
.delete([
    withCheckMsg('plusId').notEmpty().isNumeric(),
    validate
],deletePlus)
.put(...checkPlusMsg,
    withCheckMsg('plusId').notEmpty().isNumeric(),
    validate,
    updatePlus)

export default plusRouter;