import { Request, Response } from 'express';
import { BaseController } from '../../infra/http/controllers/BaseController';
import { HttpRequest } from '../../infra/http/interfaces/HttpRequest';
import jwt from 'jsonwebtoken';

export const expressRouteAdapter = (controller: BaseController) => async (req: Request, res: Response) => {
  const secretKey = process.env.JWT_SECRET
  const httpRequest: HttpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    headers: req.headers,
  };

  const httpResponse = await controller.handle(httpRequest);
  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    res.status(httpResponse.statusCode).json({
      error: httpResponse.body?.message,
    });
  }
};
