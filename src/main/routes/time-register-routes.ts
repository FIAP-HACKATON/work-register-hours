import { Router } from 'express';
import { expressRouteAdapter } from '../adapters/express-route-adapter';
import { makeCreateRegisterController } from '../factories/controllers/work-register/create-register/controller-factory';

export default (router: Router): void => {
  router.post('/time-register/', expressRouteAdapter(makeCreateRegisterController()));
};
