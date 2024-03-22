import { UserRepository } from './../../../../infra/database/repositories/User.repository';
import { TimeRegisterRepository } from '../../../../infra/database/repositories/TimeRegister.repository';
import { CreateRegisterInterface } from '../../../../application/interfaces/use-cases/time-register/CreateRegisterInterface';
import { CreateRegister } from '../../../../application/use-cases/time-register/CreateRegister';

export const makeCreateRegister = (): CreateRegisterInterface => {
  const registerRepository = new TimeRegisterRepository();
  const userRepository = new UserRepository();
  return new CreateRegister(registerRepository, userRepository);
};
