import { BaseController } from '../../../../../infra/http/controllers/BaseController';
import { GetRegisterByFiltersController } from '../../../../../infra/http/controllers/work-register/GetRegisterByFiltersController';
import { makeGetRegisterByFilters } from '../../..//use-cases/time-register/get-register-by-filters-factory';

export const makeGetRegisterByFiltersController = (): BaseController => {
  const useCase = makeGetRegisterByFilters();
  return new GetRegisterByFiltersController(useCase);
};
