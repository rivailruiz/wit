import express, { Request, Response } from 'express';
import { validate } from './models/validation';


const operationsController = require('./controllers/operations');


const router = express.Router();

router.post('/api/addition', async (req: Request, res: Response) => {
    await operationsController.addiction(req, res);
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