import express from 'express';
import 'dotenv/config';
import mongoose, { mongo } from 'mongoose';

import authorRouter from './router/author.router.js';
import blogPostRouter from './router/blogPost.router.js';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors'


const port = process.env.PORT || 3000

const server = express();

// installazioni per fare upload immagini npm i multer morgan helmet cors
server.use(morgan('dev'))
server.use(helmet())
server.use(cors())

// permette di accedere al file da http://localhost:3000/uploads/nome_file
server.use('/uploads', express.static('./uploads'))

server.use(express.json());

server.use('/authors', authorRouter)
server.use('/blogPosts', blogPostRouter)

await mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => console.log('database connesso'))
    .catch((err) => console.log(err));

server.listen(port, () => {
    console.log(`server avviato su ${process.env.HOST}:${port}`);
})