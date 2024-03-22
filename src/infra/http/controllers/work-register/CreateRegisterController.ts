import { CreateRegisterInterface } from '@application/interfaces/use-cases/time-register/CreateRegisterInterface';
import { BaseController } from '../BaseController';
import { HttpRequest } from '../../interfaces/HttpRequest';
import { HttpResponse } from '../../interfaces/HttpResponse';

export class CreateRegisterController extends BaseController {
  constructor(private readonly createRegister: CreateRegisterInterface) {
    super();
  }

  async execute(
    httpRequest: CreateRegisterController.Request,
  ): Promise<CreateRegisterController.Response> {
    const { user_id } = httpRequest.body;
    await this.createRegister.execute({ user_id });
    return {
      statusCode: 201,
    };
  }
}

export namespace CreateRegisterController {
  export type Request = HttpRequest<CreateRegisterInterface.Request>;
  export type Response = HttpResponse<string> | HttpResponse<Error>;
}
