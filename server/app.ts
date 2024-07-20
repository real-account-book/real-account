import { AppDataSource } from "./data-source";
import express from "express";
import { plusRouter } from "./routes/plus";
import { totalRouter } from "./routes/total";
import { minusRouter } from "./routes/minus";
import { categoryRouter } from "./routes/categories";
import dotenv from "dotenv";
import cors from "cors";
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



app.use(cors({
  origin: 'http://localhost:5173/',  
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));

// app.use('/')
app.use("/plus", plusRouter);
app.use("/total", totalRouter);
app.use("/minus", minusRouter);
app.use("/category", categoryRouter);

app.listen(process.env.PORT_KEY);
