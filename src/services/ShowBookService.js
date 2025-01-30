import bookModel from "../model/book.js";

export default class ShowBookService{
    async execute(id){
        const e = new Error("Livro nao encontrado");
        const book = await bookModel.findOne({id: id});
        if (book) {
            return book
            
        }else throw e.message;
        
        
        
    }

}