import express, { json } from 'express'
import 'express-async-errors';
import cors from "cors";
import routes from "../routes/index.js";
const app = express()
app.use(cors())
app.use(json())

app.use(routes)



app.listen(3000,()=>{
    console.log('routes on road')
})