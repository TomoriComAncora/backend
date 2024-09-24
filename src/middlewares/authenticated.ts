import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function authenticated(req: Request, res: Response, next: NextFunction) {
  //Recebendo o token
  const AuthToken = req.headers.authorization;

  //Verificando se o token foi enviado
  if (!AuthToken) {
    return res.status(401).end();
  }

  //Separando as strings do token
  const [, token] = AuthToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    //recuperar o id do token e colocando dentro da variavel user_id dentro do request
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
