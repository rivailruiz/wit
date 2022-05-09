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
    result: a + b
  }

  return response;
}

const division = (req: Request, res: Response) => {
  const { a, b } = req.body;
  let response = {
    status: "success",
    result: a + b
  }

  return response;
}

const multiplication = (req: Request, res: Response) => {
  const { a, b } = req.body;
  let response = {
    status: "success",
    result: a + b
  }

  return response;
}



const validateFields = (a: number, b: number) => {
  if (!a || isNaN(a)) {
    return { "success": false, "status": "please, verify the a field." }
  }
  if (!b || isNaN(b)) {
    return { "success": false, "status": "please, verify the b field." }
  }

  return true;
}

module.exports = { addition, subtraction, division, multiplication };