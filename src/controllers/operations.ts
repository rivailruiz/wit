import { Request, Response } from 'express';

const operationsService = require('../services/operations');

const addition = (req: Request, res: Response) => {
  let operation = operationsService.addition(req, res)
  res.send(operation);
};

const subtraction = (req: Request, res: Response) => {
  let operation = operationsService.subtraction(req, res)
  res.send(operation);
}

const division = (req: Request, res: Response) => {
  let operation = operationsService.division(req, res)
  res.send(operation);
}

const multiplication = (req: Request, res: Response) => {
  let operation = operationsService.multiplication(req, res)
  res.send(operation);
}

module.exports = { addition, subtraction, division, multiplication };