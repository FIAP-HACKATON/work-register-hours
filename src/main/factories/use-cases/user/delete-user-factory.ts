import { DeleteUserInterface } from '@application/interfaces/use-cases/user/DeleteUserInterface';
import { DeleteUser } from '../../../../application/use-cases/user/DeleteUser';
import { UserRepository } from '../../../../infra/database/repositories/User.repository';

export const makeDeleteUser = (): DeleteUserInterface => {
  const userRepository = new UserRepository();
  return new DeleteUser(userRepository);
};
