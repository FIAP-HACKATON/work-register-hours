import { CreateRegisterInterface } from '@application/interfaces/use-cases/time-register/CreateRegister.interface';
import { CreateRegisterRepository } from '@application/interfaces/repositories/time-register/CreateRegisterRepostirory';
import { GetUserByIdRepository } from '@application/interfaces/repositories/user/GetUserByIdRepository';
import moment from 'moment-timezone';

export class CreateRegister implements CreateRegisterInterface {
  constructor(
    private readonly createRegistrationRepository: CreateRegisterRepository,
    private readonly findUserById?: GetUserByIdRepository,
  ) {}

  async execute(
    UserData: CreateRegisterInterface.Request,
  ): Promise<CreateRegisterInterface.Response> {
    try {
      const user = await this.findUserById.getUserById(UserData.user_id);

      if (!user) {
        return Promise.resolve('User not found');
      }

      const now = moment().tz('America/Sao_Paulo');
      UserData.date = now.toDate();

      const data = await this.createRegistrationRepository.execute(UserData);
      if (!data) {
        return Error('Error creating register');
      }
      return Promise.resolve('register created successfully');
    } catch (error) {
      console.log(error);
      throw new Error((error as Error).message);
    }
  }
}
