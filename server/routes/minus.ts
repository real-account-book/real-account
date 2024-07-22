import express, {Router} from "express";
import { addMinus,deleteMinus,updateMinus} from "../controller/minusController";
import { validate } from "../validator/validator";
import { withCheckMsg } from "../validator/validator";

const minusRouter : Router = express.Router()
minusRouter.use(express.json());

const checkMinusMsg = [    
    withCheckMsg("minus").notEmpty().isNumeric(),
    withCheckMsg('title').notEmpty().isString(),
    withCheckMsg('content').notEmpty().isString()
]

minusRouter.post('/',
    ...checkMinusMsg,
    withCheckMsg('uploaded_at').notEmpty().isDate(),
    validate
,addMinus)

minusRouter.route('/:minusId')
.delete([
    withCheckMsg('minusId').notEmpty().isInt(),
    validate
],deleteMinus)
.put(
    ...checkMinusMsg,
    validate,
    updateMinus)

export default minusRouter;