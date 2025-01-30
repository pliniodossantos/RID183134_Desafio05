import bookModel from "../model/book.js";

export default class DeleteBookService {
    async execute(id) {
        const idExists = await bookModel.findOne({ id: id });
        const e = new Error("Livro não encontrado");
        if (idExists == null) {
            throw e.message;
        }
        await bookModel.deleteOne({ id: id })

    }

}

