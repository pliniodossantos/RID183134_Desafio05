import bookModel from "../model/book.js";

export default class CreateBookService {
    async execute(id, titulo, num_paginas, isbn, editora) {
        const isbnExists = await bookModel.findOne({ isbn: isbn });
        const idExists = await bookModel.findOne({ id: id });
        const eISBN = new Error("ISBN já está em uso");
        const eId = new Error("Id já está em uso");
        if (isbnExists != null) {
            throw eISBN.message;
        }
        if (idExists != null) {
            throw eId.message;
        }
        const book = await bookModel.create({id:id, titulo: titulo, num_paginas:num_paginas, isbn:isbn, editora: editora});
        return book

    }

}

