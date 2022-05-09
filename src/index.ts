import express from 'express';
import { json } from 'body-parser';
import { MainRouter } from './routes';
import mongoose from 'mongoose';
import errorHandler from './middlewares/error-handler';
import validate from './middlewares/validate';

const app = express();
app.use(json());
app.use(MainRouter);


const loggerMiddleware = (request: express.Request, response: express.Response, next: any) => {
  console.log(`${request.method} ${request.path}`);
  next();
}

app.use(loggerMiddleware);
app.use(errorHandler);
app.use(validate);

//DB
mongoose.connect('mongodb://localhost:27017/wit')
  .then(
    () => { console.log('connected to mongodb ') },
    err => { console.log(err) }
  )

mongoose.connection.on('connected', () => console.log('Connected db'));
mongoose.connection.on('error', (err) => console.log('Connection failed with - ', err));

app.listen(3000, () => {
  console.log('server is listening on port 3000');
})