import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Calc } from '../models/calc';
import handleError from '../middlewares/error-handler';

const addition = async (req: Request, res: Response) => {
  const { a, b } = req.body;
  let operation = a + b;
  let response = {
    status: "success",
    result: operation,
  }

  const addition = new Calc({ a: a, b: b, result: operation });
  await addition.save(addition, (err: any) => {
    if (err) console.error(err);
  })
  return { id: addition._id.toString(), response };
};

const subtraction = async (req: Request, res: Response) => {
  const { a, b } = req.body; 
  let operation = a - b;
  let response = {
    status: "success",
    result: operation
  }

  const subtraction = new Calc({ a: a, b: b, result: operation });
  await subtraction.save(subtraction, (err: any) => {
    if (err) console.error(err);
  })

  return { id: subtraction._id.toString(), response };
}

const division = async (req: Request, res: Response) => {
  const { a, b } = req.body;
  let operation = a / b;
  let response = {
    status: "success",
    result: operation
  }
  
  const division = new Calc({ a: a, b: b, result: operation });
  await division.save(division, (err: any) => {
    if (err) console.error(err);
  })

  return { id: division._id.toString(), response };
}

const multiplication = async (req: Request, res: Response) => {
  const { a, b } = req.body;
  let operation = a * b;
  let response = {
    status: "success",
    result: operation
  }

  const multiplication = new Calc({ a: a, b: b, result: operation });
  await multiplication.save(multiplication, (err: any) => {
    if (err) console.error(err);
  })

  return { id: multiplication._id.toString(), response };
}

const validation = async (req: Request, res: Response) => {
  const { id } = req.body;
  let operation = await Calc.findById(id).exec();

  return operation;
}

const createLog = async () => {
  
}


module.exports = { addition, subtraction, division, multiplication, validation };