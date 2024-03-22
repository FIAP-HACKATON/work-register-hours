import { LambdaInvokerParams } from './ports/lambda.ports';

export interface LambdaInvoker {
  invoke(payload: LambdaInvokerParams): Promise<any>;
}
