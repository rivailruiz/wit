import express from 'express';
import { json } from 'body-parser';
import { MainRouter } from './routes';
import errorHandler from './middlewares/error-handler';
import { socket } from './socket';
import http from 'http';
import cors from 'cors';
import { database } from './db';

require('dotenv').config()

const path = require('path')
const app = express();
const server = http.createServer(app);
const allowedOrigins = ['http://localhost:8080'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(json());
app.use(cors(options));
app.use(MainRouter);
app.use('/public/imgs', express.static(path.join('.', 'public/imgs')))

app.set('trust proxy', true);
app.use(errorHandler);


export const Socket: socket = new socket(server);
Socket.init();
Socket.listen();


//DB
const Database: database = new database();
Database.init();


server.listen(3000, () => {
  console.log('server is listening on port 3000');
})