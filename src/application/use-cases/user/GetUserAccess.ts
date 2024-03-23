import { UserNotFoundError } from '../../errors/user/UserNotFoundError';
import { GetUserAccessInterface } from '../../../application/interfaces/use-cases/user/GetUserAccessInterface';
import { GetUserAccessRepository } from '../../../application/interfaces/repositories/user/GetUserAccess';

export class GetUserAccess implements GetUserAccessInterface {
  constructor(
    private readonly getUserAccessRepository: GetUserAccessRepository,
  ) {}

  async execute(
    queryString: GetUserAccessInterface.Request,
  ): Promise<GetUserAccessInterface.Response> {
    const { name, registration } = queryString;

    const user = await this.getUserAccessRepository.getUserAccess({
      name,
      registration,
    });
    if (!user) {
      return new UserNotFoundError();
    }

    return user;
  }
}
