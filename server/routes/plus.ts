import { addPlus, deletePlus, updatePlus } from "../Controller/PlusController";
import express, {Router} from "express";
const router = express.Router()
export const plusRouter : Router = express.Router()
plusRouter.use(express.json());

plusRouter.route('/')
.post(addPlus)
.put(updatePlus)
plusRouter.delete('/:plus_id', deletePlus)
