import express, { Request, Response } from 'express';
import { validate } from '../models/validation';

const addiction = (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;
    res.send(`WIT Calc: ${operative1 + operative2}`);
};

const subtraction = (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;
    res.send(`WIT Calc: ${operative1 - operative2}`);
}

const division = (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;
    res.send(`WIT Calc: ${operative1 / operative2}`);
}

const multiplication = (req: Request, res: Response) => {
    const { operative1, operative2 } = req.body;
    res.send(`WIT Calc: ${operative1 / operative2}`);
}



const validateFields = (operative1: number, operative2: number) => {
    if(!operative1 || isNaN(operative1)){
        return {"sucess": false, "message": "please, verify the operative1 field."}
    }
    if(!operative2 || isNaN(operative2)){
        return {"sucess": false, "message": "please, verify the operative2 field."}
    }

    return true;
}

module.exports = { addiction, subtraction, division, multiplication };