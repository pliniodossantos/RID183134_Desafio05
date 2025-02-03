import AppError from "../errors/AppError.js";
import bookModel from "../model/book.js";

export default class CreateBookService {
    async execute(id, titulo, num_paginas, isbn, editora) {
        const isbnExists = await bookModel.findOne({ isbn: isbn });
        const idExists = await bookModel.findOne({ id: id });
        if (idExists != null) {
            throw new AppError("Id já está em uso",400)
        }
        if (isbnExists != null) {
            throw new AppError("ISBN já está em uso",400)
        }

        const book = await bookModel.create({id:id, titulo: titulo, num_paginas:num_paginas, isbn:isbn, editora: editora});
        return book

    }

}

