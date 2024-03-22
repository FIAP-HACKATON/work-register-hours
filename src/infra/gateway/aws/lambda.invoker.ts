import { LambdaInvoker } from '@application/interfaces/gateway/lambda';
import { LambdaInvokerParams } from '@application/interfaces/gateway/ports/lambda.ports';
import { Lambda } from 'aws-sdk';

export class AwsLambdaInvoker implements LambdaInvoker {
  private readonly lambda: Lambda;

  constructor() {
    this.lambda = new Lambda({
      region: process.env.AWS_REGION,
    });
  }

  async invoke(payload: LambdaInvokerParams): Promise<any> {
    const params = {
      FunctionName: process.env.FUNCTION_LAMBDA_NAME,
      Payload: JSON.stringify(payload),
    };

    const response = await this.lambda.invoke(params).promise();
    return JSON.parse(response.Payload as string);
  }
}
