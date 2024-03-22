import { CreateRegisterRepository } from "@application/interfaces/repositories/time-register/CreateRegisterRepostirory";
import { GetRegisterByFilterInterface } from "@application/interfaces/use-cases/time-register/GetRegisterByFilter";
import { PointRegisterPresenter } from "@application/presenter/time-register.presenter";

export class GetRegisterByFilters implements GetRegisterByFilterInterface {
  constructor(private readonly getUserByFiltersRepository: CreateRegisterRepository) {}

  async execute(filter: GetRegisterByFilterInterface.Request): Promise<GetRegisterByFilterInterface.Response> {
    const { initial_date, final_date } = filter;
    const registration = await this.getUserByFiltersRepository.execute({ initial_date, final_date });

    if (!registration) {
      return []
    }

    const totalHoursWorked = registration.intervals.reduce((acc, interval) => {
      const start = new Date(interval.start);
      const close = new Date(interval.close);
      const diff = close.getTime() - start.getTime();
      return acc + diff;
    }, 0);

    registration.totalHoursWorked = totalHoursWorked / 1000 / 60 / 60;

    return PointRegisterPresenter.register(registration);
  }
}
