import { Router } from "express";
import BooksControllers from "../../controllers/BooksControllers.js";


const booksRouter = Router();
const booksControllers = new BooksControllers();

booksRouter.get('/', booksControllers.index);
booksRouter.get('/:id', booksControllers.Show);
booksRouter.put('/:id', booksControllers.update);
booksRouter.post('/', booksControllers.create);
booksRouter.delete('/:id', booksControllers.delete);


export default booksRouter;