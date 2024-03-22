import { GetRegisterByFilterInterface } from '@application/interfaces/use-cases/time-register/GetRegisterByFilter.interface.';
import { PointRegisterPresenter } from '../../../application/presenter/time-register.presenter';
import { GetRegisterRepository } from '@application/interfaces/repositories/time-register/GetRegisterRepository';

export class GetRegisterByFilters implements GetRegisterByFilterInterface {
  constructor(
    private readonly getUserByFiltersRepository: GetRegisterRepository,
  ) {}

  async execute(
    filter: GetRegisterByFilterInterface.Request,
  ): Promise<GetRegisterByFilterInterface.Response> {
    try {
      const { filter_date } = filter;
      const registration =
        await this.getUserByFiltersRepository.getRegistration({
          filter_date,
        });

      if (!registration) {
        return [];
      }
      return PointRegisterPresenter.register(registration);
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
