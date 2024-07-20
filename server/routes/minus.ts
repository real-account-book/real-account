import express, {Router} from "express";
import { addMinus,deleteMinus,updateMinus} from "../controller/minusController";
import { check, param } from "express-validator";
import { validate } from "../validator/validator";
import { withCheckMsg } from "../validator/validator";

export const minusRouter : Router = express.Router()
minusRouter.use(express.json());

minusRouter.post('/',[
    withCheckMsg("minus").notEmpty().isNumeric(),
    withCheckMsg('title').notEmpty().isString(),
    withCheckMsg('content').notEmpty().isString(),
    withCheckMsg('uploaded_at').notEmpty().isDate(),
    validate
],addMinus)

minusRouter.route('/:minusId')
.delete([
    param('minusId').notEmpty().isInt().withMessage("minusId 형식 오류"),
    validate
],deleteMinus)
.put([
    withCheckMsg('minus').notEmpty().isInt(),
    withCheckMsg('category').isInt(),
    withCheckMsg('title').notEmpty().isString(),
    withCheckMsg('content').notEmpty().isString(),
    validate
],updateMinus)

