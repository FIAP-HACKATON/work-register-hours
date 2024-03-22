import { makeGetUserAccess } from '../../../../../main/factories/use-cases/user/get-user-access';
import { BaseController } from '../../../../../infra/http/controllers/BaseController';
import { GetUserByFiltersController } from '../../../../../infra/http/controllers/user/GetUserByFiltersController';
import { makeGetUserAccessValidation } from './validation-factory';
import { GetUserAccess } from '@application/use-cases/user/GetUserAccess';
import { GetUserByAccessController } from '../../../../../infra/http/controllers/user/GetUserAccess';

export const makeGetUserAccessController = (): BaseController => {
  const validation = makeGetUserAccessValidation();
  const useCase = makeGetUserAccess();
  return new GetUserByAccessController(validation, useCase);
};
