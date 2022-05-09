import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../models/custom-error';

function validate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { a, b } = req.body;
  let customError;
  console.log(req)
  let operationRoutes = [
    ''
  ]
  if (!a) {
    customError = new CustomError(
      "The operator 'a' cannot be null."
    );
    res.status((customError as CustomError).status).send(customError);
  }

  if (!b) {
    customError = new CustomError(
      "The operator 'b' cannot be null."
    );
    res.status((customError as CustomError).status).send(customError);
  }

  next();
};

export default validate;