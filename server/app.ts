import { AppDataSource } from "./data-source";
import express, { Request, Response } from "express";
import  plusRouter from "./routes/plus";
import  totalRouter from "./routes/total";
import  minusRouter from "./routes/minus";
import  categoryRouter  from "./routes/categories";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { Categories } from "./entity/categories";
dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const categoryRepository = AppDataSource.getRepository(Categories)
    try{
        await categoryRepository.save([
          {category_id : 1,category_name : "카페"},
          {category_id : 2,category_name : "편의점"},
          {category_id : 3,category_name : "쇼핑"},
        ])
        console.log("Default categories added.");
    }catch(err){
        console.error('Error fetching data: ', err);  
    }
  })
  .catch((error) => console.log(error));

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/api/plus", plusRouter);
app.use("/api/total", totalRouter);
app.use("/api/minus", minusRouter);
app.use("/api/category", categoryRouter);


let staticPath = path.join(__dirname, "..", "..", "frontend", "dist");

app.use("/", express.static(staticPath));
app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: staticPath,
  });
});

app.listen(process.env.PORT_KEY);
