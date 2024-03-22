import { UserRepository } from '../../../../infra/database/repositories/User.repository';
import { GetUserByFiltersInterface } from '@application/interfaces/use-cases/user/GetUserByFiltersInterface';
import { GetUserByFilters } from '../../../../application/use-cases/user/GetUserByFilter';
import { GetUserAccess } from '../../../../application/use-cases/user/GetUserAccess';
import { GetUserAccessInterface } from '../../../../application/interfaces/use-cases/user/GetUserAccessInterface';

export const makeGetUserAccess = (): GetUserAccessInterface => {
  const userRepository = new UserRepository();
  return new GetUserAccess(userRepository);
};
