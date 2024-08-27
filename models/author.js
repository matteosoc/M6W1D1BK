import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    nome: String,
    cognome: String,
    email: {
        type: String,
        required: true, // obbligatorio
        unique: true, // non può esistere lo stesso valore nel database
        lowercase: true, // converte in minuscolo
        trim: true // toglie spazi vuoti
    },
    data: Date,
    avatar: String
}, {
    collection: 'authors'
})

// costante da esportare
const Author = model('Author', authorSchema)

export default Author;