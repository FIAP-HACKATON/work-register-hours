import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const expressMiddlewareAccess = () => async (req: Request, res: Response, next: NextFunction) => {
  const secretKey = process.env.JWT_SECRET;
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Invalid token' });
  }
  const token = authHeader.replace('Bearer ', '');
  jwt.verify(token, secretKey, function(err, decoded) {
      if(err){
          return res.status(401).json({ message: 'Invalid token' });
      }
      next();
  });
};
