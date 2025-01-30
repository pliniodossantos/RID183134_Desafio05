import { Schema, model } from 'mongoose'
import conn from '../config/mongo.js'

conn()

const bookSchema = Schema({
    id: Number,
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String
})

const bookModel = model('books', bookSchema)

export default bookModel