import express from 'express';
import BlogPost from '../models/blogPost.js';
import * as blogPostsController from '../controllers/blogPosts.controller.js';
import { uploadCloudinaryCover } from '../middlewares/uploadCloudinary.js';


const blogPostRouter = express.Router();

// restituisce la lista degli articoli
blogPostRouter.get("/", blogPostsController.readAll);

// restituisce il singolo articolo
blogPostRouter.get("/:id", blogPostsController.readOne);

// inserire un blogPost nel database
blogPostRouter.post("/", blogPostsController.createOne);

//modificare un articolo blog
blogPostRouter.put("/:id", blogPostsController.editOne);

//eliminare un articolo del blog
blogPostRouter.delete("/:id", blogPostsController.deleteOne)

// carica immagine articolo
blogPostRouter.patch('/:blogPostId/cover/', uploadCloudinaryCover.single('cover'), blogPostsController.patchCover )



export default blogPostRouter;