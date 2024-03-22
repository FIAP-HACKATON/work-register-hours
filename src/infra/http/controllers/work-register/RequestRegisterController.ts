import { BaseController } from '../BaseController';
import { HttpRequest } from '../../interfaces/HttpRequest';
import { HttpResponse } from '../../interfaces/HttpResponse';
import { RequestRegisterByFilterInterface } from '@application/interfaces/use-cases/time-register/RequestRegister.interface';

export class CreateRequestHistoryController extends BaseController {
  constructor(
    private readonly requestHistory: RequestRegisterByFilterInterface,
  ) {
    super();
  }

  async execute(
    httpRequest: CreateRequestController.Request,
  ): Promise<CreateRequestController.Response> {
    const { userId, month, timezone } = httpRequest.body;
    await this.requestHistory.execute({ userId, month, timezone });
    return {
      statusCode: 201,
    };
  }
}

export namespace CreateRequestController {
  export type Request = HttpRequest<RequestRegisterByFilterInterface.Request>;
  export type Response = HttpResponse<string> | HttpResponse<Error>;
}
