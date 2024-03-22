import { NextFunction, Request, Response } from 'express';
import { HttpRequest } from '../../infra/http/interfaces/HttpRequest';
import jwt from 'jsonwebtoken'
import { nextTick } from 'process';
export const expressMiddlewareAccess =
    () => async (req: Request, res: Response, next: NextFunction) => {
        const secretKey = process.env.JWT_SECRET;
        const httpRequest: HttpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            headers: req.headers,
        };
        const token = req.headers['authorization'].replace('Bearer ', '')
        jwt.verify(token, secretKey, function(err, decoded) {
            if(err){
              return res.status(401).json({ message: 'Invalid token'});
            }
          })  
        next();
    };