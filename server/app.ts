import { AppDataSource } from "./data-source"
import  express from "express"
import { monthRouter } from "./routes/month"
import { plusRouter } from "./routes/plus"
import { dayRouter } from "./routes/day"
import { minusRouter } from "./routes/minus"
import { categoryRouter } from "./routes/categories"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")

}).catch(error => console.log(error))

const app = express();

app.use(express.json())

app.use('/month', monthRouter)
app.use('/plus', plusRouter)
app.use('/day', dayRouter)
app.use('/minus', minusRouter)
app.use('/category', categoryRouter)

app.listen(3000)    