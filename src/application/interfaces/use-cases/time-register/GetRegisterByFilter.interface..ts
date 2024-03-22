import { registerPoint } from '@application/presenter/ports/presenter.ports';
import { UseCase } from '../UseCase';

export interface GetRegisterByFilterInterface
  extends UseCase<
    GetRegisterByFilterInterface.Request,
    GetRegisterByFilterInterface.Response
  > {
  execute(
    filter: GetRegisterByFilterInterface.Request,
  ): Promise<GetRegisterByFilterInterface.Response>;
}

export namespace GetRegisterByFilterInterface {
  export type Request = {
    filter_date: string;
  };
  export type Response = registerPoint | [];
}
