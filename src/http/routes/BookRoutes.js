import { Router } from "express";
import BooksControllers from "../../controllers/BooksControllers.js";
import { idParamsValidate, updateBookSchema,createBookSchema } from "../schemas/BookSchema.js";

const booksRouter = Router();
const booksControllers = new BooksControllers();

booksRouter.get('/', booksControllers.index);
booksRouter.get('/:id',idParamsValidate, booksControllers.Show);
booksRouter.put('/:id',updateBookSchema, booksControllers.update);
booksRouter.post('/',createBookSchema, booksControllers.create);
booksRouter.delete('/:id',idParamsValidate, booksControllers.delete);


export default booksRouter;