import AppError from "../errors/AppError.js";
import bookModel from "../model/book.js";

export default class DeleteBookService {
    async execute(id) {
        const idExists = await bookModel.findOne({ id: id });
        if (idExists == null) {
            throw new AppError("Livro não encontrado", 404);
        }
        await bookModel.deleteOne({ id: id });

    }

}

