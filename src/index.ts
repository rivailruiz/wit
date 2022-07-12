import express from 'express';
import { json } from 'body-parser';
import { MainRouter } from './routes';
import mongoose from 'mongoose';
import errorHandler from './middlewares/error-handler';
import validate from './middlewares/validate';
import { socket } from './socket';
import http from 'http';
import * as socketio from "socket.io";


require('dotenv').config()

const app = express();
const server = http.createServer(app);
app.set('trust proxy', true);
app.use(json());
app.use(errorHandler);
app.use(validate);
app.use(MainRouter);
const Socket: socket = new socket(server);
Socket.init();
Socket.listen();


//DB
mongoose.connect('mongodb://localhost:27017/wit')
.then(
  () => { console.log('connected to mongodb ') },
  err => { console.log(err) }
  )
  
mongoose.connection.on('connected', () => console.log('Connected db'));
mongoose.connection.on('error', (err) => console.log('Connection failed with - ', err));  
mongoose.set('debug', true);


server.listen(3000, () => {
  console.log('server is listening on port 3000');
})