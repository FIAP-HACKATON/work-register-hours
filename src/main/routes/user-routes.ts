import { Router } from 'express';
import { expressRouteAdapter } from '../../main/adapters/express-route-adapter';
import { makeCreateUserController } from '../factories/controllers/user/create-user/controller-factory';
import { makeGetUsersController } from '../factories/controllers/user/get-user/controller-factory';
import { makeGetUserByIdController } from '../factories/controllers/user/get-user-by-id/controller-factory';
import { makeGetUserByFiltersController } from '../factories/controllers/user/get-user-by-filters/controller-factory';
import { makeUpdateUserController } from '../factories/controllers/user/update-user/controller-factory';
import { makeDeleteUserController } from '../factories/controllers/user/delete-user/controller-factory';
import { makeGetUserAccessController } from '../factories/controllers/user/get-user-access/controller-factory';
import { expressMiddlewareAccess } from '../../main/adapters/express-middleware-access';

export default (router: Router): void => {
  router.post('/user/', expressRouteAdapter(makeCreateUserController()));
  router.post('/user/access', expressRouteAdapter(makeGetUserAccessController()));
  router.get('/users/', expressMiddlewareAccess(), expressRouteAdapter(makeGetUsersController()));
  router.get(
    '/user/filters', expressMiddlewareAccess(),
    expressRouteAdapter(makeGetUserByFiltersController()),
  );
  router.get('/user/:id', expressMiddlewareAccess(), expressRouteAdapter(makeGetUserByIdController()));
  router.patch('/user/:id', expressMiddlewareAccess(), expressRouteAdapter(makeUpdateUserController()));
  router.delete('/user/:id', expressMiddlewareAccess(), expressRouteAdapter(makeDeleteUserController()));
};
