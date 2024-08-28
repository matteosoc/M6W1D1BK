import { Schema } from "mongoose";
import BlogPost from "./blogPost";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            trim: true
        },
        blogPost: {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        },
    },
    {
        collection: 'comments',
        trimestamps: true
    }
);

export default commentSchema;