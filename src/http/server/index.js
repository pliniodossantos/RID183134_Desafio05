import express, { json } from 'express'
import 'express-async-errors';
import cors from "cors";
import routes from "../routes/index.js";
import ErrorHandleMiddleware from '../../errors/ErrorHandleMiddleware.js';
import { errors } from 'celebrate';
const app = express()
app.use(cors())
app.use(json())

app.use(routes)
app.use(errors())
app.use(ErrorHandleMiddleware.haddleError)


app.listen(3000,()=>{
    console.log('routes on road')
})