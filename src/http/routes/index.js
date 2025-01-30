import { Router } from "express";
import booksRouter from "./BookRoutes.js";


const routes = Router();
routes.get('/health', (req, res) =>{
    return res.json({message:'routes on road'});
});

routes.use('/livros', booksRouter);


export default routes;