import express, { Express, Request, Response } from "express";
import {monthRouter} from './routes/month';
import { plusRouter } from "./routes/plus";
import { yearRouter } from "./routes/year";
import { categoryRouter } from "./routes/category";

const app: Express = express();
const port = 8888;

app.use('/month', monthRouter);
app.use('/plus', plusRouter);
app.use('/year', yearRouter);
app.use('/category', categoryRouter);

app.listen(port, ()=> {
    console.log(`[server]: Server is running at <https://localhost:${port}>`)
});