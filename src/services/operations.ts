import { Request, Response } from 'express';

const addition = (req: Request, res: Response) => {
  const { a, b } = req.body;
  let response = {
    status: "success",
    result: a + b
  }

  return response;
};

const subtraction = (req: Request, res: Response) => {
  const { a, b } = req.body;
  let response = {
    status: "success",
    result: a - b
  }

  return response;
}

const division = (req: Request, res: Response) => {
  const { a, b } = req.body;
  let response = {
    status: "success",
    result: a / b
  }

  return response;
}

const multiplication = (req: Request, res: Response) => {
  const { a, b } = req.body;
  let response = {
    status: "success",
    result: a * b
  }

  return response;
}


module.exports = { addition, subtraction, division, multiplication };