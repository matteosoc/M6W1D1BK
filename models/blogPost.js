import { Schema, model } from "mongoose";
import Author from '../models/author.js'

const blogPostSchema = new Schema({
    category: String,
    title: String,
    cover: String,
    readTime: {
        value: Number,
        unit: String
    },
    author: {
        type: String,
        required: true
    }
    , //email dell'autore
    
    /*     {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    } */
    /*      
        versione 2 (però va eliminata la collection!)

        author: {
        type: authorSchema,
        required: true
        } 
    */
    content: String
}, {
    collection: 'blogPosts'
})

// costante da esportare
const BlogPost = model('BlogPost', blogPostSchema)

export default BlogPost;