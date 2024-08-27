import { Schema } from "mongoose";
import BlogPost from "./blogPost";

const commentsSchema = new Schema(
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

