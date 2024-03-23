/* istanbul ignore file */

import { Express, Router } from 'express';
import usersRouter from '../routes/user-routes';
import registerRouter from '../routes/time-register-routes';
import healthyRouter from '../routes/healthcheck';
import swaggerRoutes from '../doc/swagger-config';

export default (app: Express): void => {
  const router = Router();
  app.use('/', swaggerRoutes);
  app.use('/api', router);
  usersRouter(router);
  registerRouter(router);
  healthyRouter(router);
};
