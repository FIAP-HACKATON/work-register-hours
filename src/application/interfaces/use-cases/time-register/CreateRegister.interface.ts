import { UseCase } from '@application/interfaces/use-cases/UseCase';
import { TimeRegisterEntity } from '@domain/entities/time-register';

export interface CreateRegisterInterface
  extends UseCase<
    CreateRegisterInterface.Request,
    CreateRegisterInterface.Response
  > {
  execute(
    UserData: CreateRegisterInterface.Request,
  ): Promise<CreateRegisterInterface.Response>;
}

export namespace CreateRegisterInterface {
  export type Request = createObject;
  export type Response = string | Error;
}

export type createObject = Omit<
  Partial<TimeRegisterEntity>,
  'id' | 'created_at' | 'updated_at'
> & {
  user_id;
};
