import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../models/custom-error';

function handleError(
  err: TypeError | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customError = err;

  console.log(err);

  if (!(err instanceof CustomError)) {
    customError = new CustomError(
      'Oh no, this is embarrasing. We are having troubles my friend'
    );
  }
  res.status((customError as CustomError).status).send(customError);
};

export default handleError;