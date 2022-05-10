import { Request, Response } from 'express';

const operationsService = require('../services/operations');

const addition = async (req: Request, res: Response) => {
  let operation = await operationsService.addition(req, res)
  res.setHeader('Document-Id', operation.id)
  res.send(operation.response); 
};
 
const subtraction = async (req: Request, res: Response) => {
  let operation = await operationsService.subtraction(req, res)
  res.setHeader('Document-Id', operation.id)
  res.send(operation.response); 
}

const division = async (req: Request, res: Response) => {
  let operation = await operationsService.division(req, res)
  res.setHeader('Document-Id', operation.id)
  res.send(operation.response); 
}

const multiplication = async (req: Request, res: Response) => {
  let operation = await operationsService.multiplication(req, res)
  res.setHeader('Document-Id', operation.id)
  res.send(operation.response); 
}

const validation = async (req: Request, res: Response) => {
  let operation = await operationsService.validation(req, res)
  console.log(req);
  res.send(operation); 
}

module.exports = { addition, subtraction, division, multiplication, validation };