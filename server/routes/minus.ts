import express, {Router} from "express";
import { addMinus,deleteMinus,updateMinus} from "../Controller/MinusController";

export const minusRouter : Router = express.Router()
minusRouter.use(express.json());

minusRouter.route('/')
.post(addMinus)

minusRouter.route('/:minusId')
.delete(deleteMinus)
.put(updateMinus)
