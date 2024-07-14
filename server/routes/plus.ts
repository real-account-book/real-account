import { addPlus, deletePlus, updatePlus } from "../Controller/PlusController";
import express, {Router} from "express";

export const plusRouter : Router = express.Router()
plusRouter.use(express.json());

plusRouter.route('/')
.post(addPlus)

plusRouter.route('/:plusId')
.put(updatePlus)
.delete(deletePlus)
