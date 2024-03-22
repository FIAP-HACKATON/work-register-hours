import { BaseController } from '../../../../../infra/http/controllers/BaseController';
import { CreateRequestHistoryController } from '../../../../../infra/http/controllers/work-register/RequestRegisterController';
import { makeCreateRequestHistory } from '../../../../factories/use-cases/time-register/request-regiter-history-factory';

export const makeRequestHistoryController = (): BaseController => {
  const useCase = makeCreateRequestHistory();
  const data = new CreateRequestHistoryController(useCase);
  return data;
};
