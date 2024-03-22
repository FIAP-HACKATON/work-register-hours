import { RequestRegisterByFilterInterface } from '../../../../application/interfaces/use-cases/time-register/RequestRegister.interface';
import { RequestRegisterByFilters } from '../../../../application/use-cases/time-register/RequestRegisterHistory';
import { AwsLambdaInvoker } from '../../../../infra/gateway/aws/lambda.invoker';

export const makeCreateRequestHistory =
  (): RequestRegisterByFilterInterface => {
    const registerGateway = new AwsLambdaInvoker();
    return new RequestRegisterByFilters(registerGateway);
  };
