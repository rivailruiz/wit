import express, { Request, Response } from 'express';
import { validate } from './models/validation';


const router = express.Router();

router.post('/api/addition', async (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;

    return res.send(`WIT Calc: ${operative1 + operative2}`);
})

router.post('/api/subtraction', async (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;

    return res.send(`WIT Calc: ${operative1 - operative2}`);
})

router.post('/api/division', async (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;

    return res.send(`WIT Calc: ${operative1 / operative2}`);
})

router.post('/api/multiplication', async (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;

    return res.send(`WIT Calc: ${operative1 * operative2}`);
})

const validateFields = (operative1: number, operative2: number) => {
    if(!operative1 || isNaN(operative1)){
        return {"sucess": false, "message": "please, verify the operative1 field."}
    }
    if(!operative2 || isNaN(operative2)){
        return {"sucess": false, "message": "please, verify the operative2 field."}
    }

    return true;
}

export { router as MainRouter }