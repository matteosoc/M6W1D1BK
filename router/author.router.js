import express from 'express';
import uploadLocal from '../middlewares/uploadLocal.js';
import * as authorsControllers from '../controllers/authors.contrellers.js'
import uploadCloudinary from '../middlewares/uploadCloudinary.js';


const authorRouter = express.Router();

// restituisce la lista degli autori
authorRouter.get("/", authorsControllers.readMultiple)

// restituisce il singolo autore
authorRouter.get("/:id", authorsControllers.readOne)

// inserire un autore nel database + upload con cloudinary
authorRouter.post("/", uploadCloudinary.single('avatar'), authorsControllers.createOne)

// inserire un autore nel database + upload in locale
//authorRouter.post("/", uploadLocal.single('avatar'), authorsControllers.createOne)

//modificare autore
authorRouter.put("/:id", authorsControllers.editOne)

// elimina autore
authorRouter.delete("/:id", authorsControllers.deleteOne)

// modificare il contenuto di una risorsa sul server
authorRouter.patch('/:authorId/avatar/', uploadCloudinary.single('avatar'), authorsControllers.patchAvatar )

//invia email
//authorRouter.post('/send-mail', authorsControllers.sendMailMiddleware);

export default authorRouter;