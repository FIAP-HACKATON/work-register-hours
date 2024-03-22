import { BaseController } from '../BaseController';
import { HttpRequest } from '../../interfaces/HttpRequest';
import { HttpResponse } from '../../interfaces/HttpResponse';
import { ok } from '../../helpers/http';
import { GetRegisterByFilterInterface } from '../../../../application/interfaces/use-cases/time-register/GetRegisterByFilter.interface.';

export class GetRegisterByFiltersController extends BaseController {
  constructor(
    private readonly getRegisterByFilters: GetRegisterByFilterInterface,
  ) {
    super();
  }

  async execute(
    httpRequest: GetRegisterByFiltersController.Request,
  ): Promise<GetRegisterByFiltersController.Response> {
    const { filter_date } = httpRequest.query;
    const registrations = await this.getRegisterByFilters.execute({
      filter_date,
    });

    return ok(registrations);
  }
}

export namespace GetRegisterByFiltersController {
  export type Request = HttpRequest<
    GetRegisterByFilterInterface.Request,
    { email: string }
  >;
  export type Response = HttpResponse<GetRegisterByFilterInterface.Response>;
}
