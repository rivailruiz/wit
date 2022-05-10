import { Request, Response } from 'express';
import { Calc } from '../models/calc';
const logsService = require('./logs');
const { performance } = require('perf_hooks');

const addition = async (req: Request, res: Response) => {
  const { a, b } = req.body;
  let operation = a + b;
  let response = {
    status: "success",
    result: operation,
  }

  const addition = new Calc({ a: a, b: b, result: operation });
  let t0 = performance.now();
  await addition.save(addition, (err: any) => {
    if (err) console.error(err);
  })
  let t1 = performance.now();
  let time = t1 - t0;
  logsService.createLog(addition._id.toString(), req.ip, time, 200, req, res);

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
  
  let t0 = performance.now();
  await subtraction.save(subtraction, (err: any) => {
    if (err) console.error(err);
  })
  let t1 = performance.now();
  let time = t1 - t0;
  logsService.createLog(subtraction._id.toString(), req.ip, time, 200, req, res);

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

  let t0 = performance.now();
  await division.save(division, (err: any) => {
    if (err) console.error(err);
  })
  let t1 = performance.now();
  let time = t1 - t0;
  logsService.createLog(division._id.toString(), req.ip, time, 200, req, res);

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

  let t0 = performance.now();
  await multiplication.save(multiplication, (err: any) => {
    if (err) console.error(err);
  })
  let t1 = performance.now();
  let time = t1 - t0;
  logsService.createLog(multiplication._id.toString(), req.ip, time, 200, req, res);

  return { id: multiplication._id.toString(), response };
}

const validation = async (req: Request, res: Response) => {
  const { id } = req.body;
  let operation = await Calc.findById(id).exec();
  logsService.createLog(null, req, res)
  return operation;
}




module.exports = { addition, subtraction, division, multiplication, validation };