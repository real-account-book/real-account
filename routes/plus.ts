import express, { Express, Router} from "express";
import { addPlus, deletePlus, editPlus } from "../controller/PlusController";

export const plusRouter : Router = express.Router()
plusRouter.use(express.json())

plusRouter.route('/')
.post(addPlus)

plusRouter.route('/:plusId')
.delete(deletePlus)
.put(editPlus)