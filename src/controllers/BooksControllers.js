import CreateBookService from "../services/CreateBookService.js";
import ListBookService from "../services/ListBookService.js";
import ShowBookService from "../services/ShowBookService.js";
import UpdateBookService from "../services/UpdateBookService.js";
import DeleteBookService from "../services/DeleteBookService.js";


export default class BooksControllers {
    async index(request, response) {
        const listBookService = new ListBookService();
        const books = await listBookService.execute();
        return response.json(books);
    }

    async Show(request, response) {
        const id = Number(request.params.id);
        const showBookService = new ShowBookService();
        const book = await showBookService.execute(id);
        return response.json(book);
    }
    async update(request, response) {
        const id = Number(request.params.id);
        const { titulo, num_paginas, isbn, editora } = request.body;
        const updateBookService = new UpdateBookService();
        await updateBookService.execute(id, titulo, num_paginas, isbn, editora)
        return response.json({mensagem:'Edição realizada com sucesso'})
    }
    async create(request, response) {
        const { id, titulo, num_paginas, isbn, editora } = request.body;
        const createBookService = new CreateBookService();
        const book = await createBookService.execute(id, titulo, num_paginas, isbn, editora)
        return response.json({mensagem:'Livro criado com sucesso'})
    }
    async delete(request, response) {
        const id = Number(request.params.id);
        const deleteBookService = new DeleteBookService();
        await deleteBookService.execute(id)
        return response.json({mensagem:'Exluído com sucesso'})
    }


}

