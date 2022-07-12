import express, { Request, Response } from 'express';
import validate from './middlewares/validate';

// const operationsController = require('./controllers/operations');
const router = express.Router();

router.post('/api/images', async (req: Request, res: Response) => {
  // await operationsController.addition(req, res);
})

export { router as MainRouter }