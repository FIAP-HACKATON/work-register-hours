import { TimeRegisterRepository } from '../../../../infra/database/repositories/TimeRegister.repository';
import { GetRegisterByFilters } from '../../../../application/use-cases/time-register/GetRegister';
import { GetRegisterByFilterInterface } from '../../../../application/interfaces/use-cases/time-register/GetRegisterByFilter.interface.';

export const makeGetRegisterByFilters = (): GetRegisterByFilterInterface => {
  const registerRepository = new TimeRegisterRepository();
  return new GetRegisterByFilters(registerRepository);
};
