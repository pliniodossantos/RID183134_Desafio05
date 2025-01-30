import bookModel from "../model/book.js";

export default class UpdateBookService {
    async execute(id, titulo, num_paginas, isbn, editora) {
        const isbnExists = await bookModel.findOne({ isbn: isbn });
        const e = new Error("ISBN já está em uso");
        if (isbnExists != null && isbnExists.id != id) {
            throw e.message;
        }
        const book = await bookModel.findOneAndUpdate(
            { id: id },
            { $set: { titulo: titulo, num_paginas: num_paginas, isbn: isbn, editora: editora } }, { returnDocument: 'after' }
        );
        return book

    }

}

