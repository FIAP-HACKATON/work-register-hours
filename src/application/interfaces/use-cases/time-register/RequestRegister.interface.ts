import { UseCase } from '../UseCase';

export interface RequestRegisterByFilterInterface
  extends UseCase<
    RequestRegisterByFilterInterface.Request,
    RequestRegisterByFilterInterface.Response
  > {
  execute(
    filter: RequestRegisterByFilterInterface.Request,
  ): Promise<RequestRegisterByFilterInterface.Response>;
}

export namespace RequestRegisterByFilterInterface {
  export type Request = {
    userId: number;
    month: number;
    timezone: string;
  };
  export type Response = string | Error;
}
