import { BaseController } from '../BaseController';
import { HttpRequest } from '../../interfaces/HttpRequest';
import { HttpResponse } from '../../interfaces/HttpResponse';
import { badRequest, notFound } from '../../helpers/http';
import { UserNotFoundError } from '../../../../application/errors/user/UserNotFoundError';
import { Validation } from '../../interfaces/Validation';
import { GetUserAccessInterface } from '@application/interfaces/use-cases/user/GetUserAccessInterface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserCredentialInvalidError } from '../../../../application/errors/user/UserCredentialInvalid';

export class GetUserByAccessController extends BaseController {
  private secretKey = process.env.JWT_SECRET;
  private expireJwt = process.env.EXPIRE_JWT;
  constructor(
    private readonly getUserAccessValidation: Validation,
    private readonly getUserAccess: GetUserAccessInterface,
  ) {
    super(getUserAccessValidation);
  }

  async execute(
    httpRequest: GetUserAccessController.Request,
  ): Promise<GetUserAccessController.Response> {
    try {
    const { registration, name, password } = httpRequest.body!;
    const user = await this.getUserAccess.execute({
      registration,
      name,
    });
    if (user instanceof UserNotFoundError) {
      return notFound(user);
    }
    if (await bcrypt.compare(password, user.password)) {
      const payload = { id: user.id };
      const token = jwt.sign(payload, this.secretKey, {
        expiresIn: this.expireJwt,
      });
      return { statusCode: 200, body: { token } };
    }
    return badRequest(new UserCredentialInvalidError())

} catch (error) {
    console.log(error)
}}
}

export namespace GetUserAccessController {
  export type Request = HttpRequest<{
    name?: string;
    registration?: string;
    password: string;
  }>;
  export type Response =
    | HttpResponse<void>
    | HttpResponse<GetUserAccessInterface.Response>;
}
