import express, { Request, Response } from 'express';
import validate from './middlewares/validate';

const operationsController = require('./controllers/operations');
const router = express.Router();

router.post('/api/addition', validate, async (req: Request, res: Response) => {
    await operationsController.addition(req, res);
})

router.post('/api/subtraction', async (req: Request, res: Response) => {
    await operationsController.subtraction(req, res);
})

router.post('/api/division', async (req: Request, res: Response) => {
    await operationsController.division(req, res);
})

router.post('/api/multiplication', async (req: Request, res: Response) => { 
    await operationsController.multiplication(req, res);
})

export { router as MainRouter }