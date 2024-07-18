import { AppDataSource } from "./data-source";
import express from "express";
import { plusRouter } from "./routes/plus";
import { totalRouter } from "./routes/total";
import { minusRouter } from "./routes/minus";
import { categoryRouter } from "./routes/categories";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
  })
  .catch((error) => console.log(error));

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));

// app.use('/')
app.use("/plus", plusRouter);
app.use("/total", totalRouter);
app.use("/minus", minusRouter);
app.use("/category", categoryRouter);

app.listen(process.env.PORT_KEY, () => {
  console.log("Server start on : ", process.env.PORT_KEY);
});
