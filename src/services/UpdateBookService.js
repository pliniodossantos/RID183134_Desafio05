import bookModel from "../model/book.js";
import AppError from "../errors/AppError.js";

export default class UpdateBookService {
    async execute(id, titulo, num_paginas, isbn, editora) {
        const isbnExists = await bookModel.findOne({ isbn: isbn });
        if (isbnExists != null && isbnExists.id != id) {
            throw new AppError("ISBN já está em uso",400)
        }
        const book = await bookModel.findOneAndUpdate(
            { id: id },
            { $set: { titulo: titulo, num_paginas: num_paginas, isbn: isbn, editora: editora } }, { returnDocument: 'after' }
        );
        return book

    }

}

