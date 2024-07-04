import express, { Express, Request, Response } from "express";
import {monthRouter} from './routes/month'
import { plusRouter } from "./routes/plus";
import mysql from 'mysql2';

const app: Express = express();
const port = 8888;



app.use('/month', monthRouter);
app.use('/plus', plusRouter);


app.listen(port, ()=> {
    console.log(`[server]: Server is running at <https://localhost:${port}>`)
});