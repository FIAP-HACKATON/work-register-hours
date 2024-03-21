import { makeCreateRegister } from '../../../../factories/use-cases/time-register/create-register-factory';
import { BaseController } from '../../../../../infra/http/controllers/BaseController';
import { CreateRegisterController } from '../../../../../infra/http/controllers/work-register/CreateRegisterController';

export const makeCreateRegisterController = (): BaseController => {
  const useCase = makeCreateRegister();
  const data = new CreateRegisterController(useCase);
  return data;
};
