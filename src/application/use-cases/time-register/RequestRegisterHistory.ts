import { RequestRegisterByFilterInterface } from '@application/interfaces/use-cases/time-register/RequestRegister.interface';
import { AwsLambdaInvoker } from '@infra/gateway/aws/lambda.invoker';

export class RequestRegisterByFilters
  implements RequestRegisterByFilterInterface
{
  constructor(private readonly requestPointHistoryGateway: AwsLambdaInvoker) {}
  async execute(
    filter: RequestRegisterByFilterInterface.Request,
  ): Promise<RequestRegisterByFilterInterface.Response> {
    const points = await this.requestPointHistoryGateway.invoke(filter);
    if (points instanceof Error) {
      return points;
    }
    return 'register points is requested with successfully';
  }
}
