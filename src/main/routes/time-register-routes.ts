import { expressMiddlewareAccess } from '../../main/adapters/express-middleware-access';
import { Router } from 'express';
import { expressRouteAdapter } from '../adapters/express-route-adapter';
import { makeCreateRegisterController } from '../factories/controllers/work-register/create-register/controller-factory';
import { makeGetRegisterByFiltersController } from '../factories/controllers/work-register/get-registers/controller-factory';
import { makeRequestHistoryController } from '../factories/controllers/work-register/request-history/controller-factory';

export default (router: Router): void => {
  router.post(
    '/time-register/', 
    expressMiddlewareAccess(),
    expressRouteAdapter(makeCreateRegisterController()),
  );
  router.post(
    '/time-register/request-history/',
    expressMiddlewareAccess(),
    expressRouteAdapter(makeRequestHistoryController()),
  );
  router.get(
    '/time-register/',
    expressMiddlewareAccess(),
    expressRouteAdapter(makeGetRegisterByFiltersController()),
  );
};
