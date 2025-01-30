import bookModel from "../model/book.js";

export default class ListBookService{
    async execute(){
        const books = await bookModel.find();
        return books;
    }
}