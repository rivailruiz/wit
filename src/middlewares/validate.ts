import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../models/custom-error';


function validate(
  err: TypeError | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customError = err;

  const { a, b } = req.body;


  if (!(a instanceof CustomError)) {
    customError = new CustomError(
      "The operator 'a' cannot be null."
    );
  }

  res.status((customError as CustomError).status).send(customError);
};

export default validate;