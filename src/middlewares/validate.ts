import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../models/custom-error';
const logsService = require('../services/logs');

function validate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { a, b } = req.body;
  let customError;

  if (req.originalUrl != '/api/validation') {

    if (!a || isNaN(a)) {
      customError = new CustomError(
        "Please verify the operator 'a'.",
        400
      );
      res.status(400).send(customError);
      logsService.createLog(0, req.ip, 0, 400, req, res);
      return false; 
    }
  
    if (!b || isNaN(b)) {
      customError = new CustomError(
        "Please verify the operator 'b'.",
        400
      );
      res.status(400).send(customError);
      logsService.createLog(0, req.ip, 0, 400, req, res);
      return false;
    }
    
  }


  next();
};

export default validate;