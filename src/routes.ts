import express, { Request, Response } from 'express';
import { operations } from './operations/operations';


// const operationsController = require('./controllers/operations');
const router = express.Router();

router.post('/search-images', async (req: Request, res: Response) => {
  const url = req.body.url;
  let resp = await operations.fetchUrl(url);
  res.json({"ok": resp});
})

export { router as MainRouter }