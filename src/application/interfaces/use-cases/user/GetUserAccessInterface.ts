import { UseCase } from '../UseCase';
import { UserNotFoundError } from '../../../errors/user/UserNotFoundError';
import { UserEntity } from '@domain/entities/User';
import { UserCredentialInvalidError } from '../../../../application/errors/user/UserCredentialInvalid';

export interface GetUserAccessInterface
  extends UseCase<
    GetUserAccessInterface.Request,
    GetUserAccessInterface.Response
  > {
  execute(
    queryString: GetUserAccessInterface.Request,
  ): Promise<GetUserAccessInterface.Response>;
}

export namespace GetUserAccessInterface {
  export type Request = {
    name?: string;
    registration?: string;
    password: string;
  };
  export type Response =
    | UserEntity
    | UserNotFoundError
    | any
    | UserCredentialInvalidError;
}
