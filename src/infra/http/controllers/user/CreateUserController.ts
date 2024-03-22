import { CreateUserInterface } from '@application/interfaces/use-cases/user/CreateUserInterface';
import { BaseController } from '../../controllers/BaseController';
import { HttpRequest } from '../../interfaces/HttpRequest';
import { HttpResponse } from '../../interfaces/HttpResponse';
import { Validation } from '@infra/http/interfaces/Validation';

export class CreateUserController extends BaseController {
  constructor(
    private readonly userValidation: Validation,
    private readonly createUser: CreateUserInterface,
  ) {
    super(userValidation);
  }

  async execute(
    httpRequest: CreateUserController.Request,
  ): Promise<CreateUserController.Response> {
    const { name, email, password, parentId, registration } = httpRequest.body;
    await this.createUser.execute({
      name,
      email,
      password,
      parentId,
      registration,
    });
    return {
      statusCode: 201,
    };
  }
}

export namespace CreateUserController {
  export type Request = HttpRequest<CreateUserInterface.Request>;
  export type Response = HttpResponse<void> | HttpResponse<Error>;
}
