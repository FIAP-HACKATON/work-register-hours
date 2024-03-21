import { GetUsers } from '../../../../application/use-cases/user/GetUsers';
import { GetUserInterface } from '@application/interfaces/use-cases/user/GetUsersInterface';
import { UserRepository } from '../../../../infra/database/repositories/User.repository';

export const makeGetUsers = (): GetUserInterface => {
  const userRepository = new UserRepository();
  return new GetUsers(userRepository);
};
