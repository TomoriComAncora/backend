import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;
}

export function authenticated(req: Request, res: Response, next: NextFunction) {

    //Recebendo o token
    const AuthToken = req.headers.authorization;

    //Verificando se o token foi enviado
    if(!AuthToken){
        return res.status(401).end();
    }

    //Separando as strings do token
    const [, token] = AuthToken.split(" ");

    console.log(token);
}
