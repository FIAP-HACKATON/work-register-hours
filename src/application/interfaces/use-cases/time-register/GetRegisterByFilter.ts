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
    initial_date: Date;
    final_date?: Date;
  };
  export type Response = registerPoint | [];
}
