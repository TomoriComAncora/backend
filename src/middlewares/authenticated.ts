import { NextFunction, Request, Response } from "express";

export function authenticated(req: Request, res: Response, next: NextFunction) {
  console.log("Passou pelo middleware");

  return next();
}
