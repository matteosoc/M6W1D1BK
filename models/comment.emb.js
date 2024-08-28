import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
    {
        content: {
            type: String,
            minLength: 3,
            maxLength: 100,
            trim: true, //toglie spazi vuoti all'inizio e alla fine
        }
    }
); // gli schema che verranno embeddati NON devono avere la collection

export default commentSchema