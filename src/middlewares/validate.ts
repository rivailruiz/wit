import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../models/custom-error';

function validate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { a, b } = req.body;
  let customError;

  if (req.originalUrl != '/api/validation') {

    if (!a) {
      customError = new CustomError(
        "The operator 'a' cannot be null."
      );
      res.status((customError as CustomError).status).send(customError);
      return false;
    }
  
    if (!b) {
      customError = new CustomError(
        "The operator 'b' cannot be null."
      );
      res.status((customError as CustomError).status).send(customError);
      return false;
    }
    
  }


  next();
};

export default validate;