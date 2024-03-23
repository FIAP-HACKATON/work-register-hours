import { AwsLambdaInvoker } from '../../../infra/gateway/aws/lambda.invoker';
import { RequestRegisterByFilters } from './RequestRegisterHistory';

const mockInvoke = jest.fn();

jest.mock('../../../infra/gateway/aws/lambda.invoker', () => {
  return {
    AwsLambdaInvoker: jest.fn().mockImplementation(() => {
      return {
        invoke: mockInvoke,
      };
    }),
  };
});

afterEach(() => {
  mockInvoke.mockClear();
  jest.restoreAllMocks();
});

describe('RequestRegisterByFilters', () => {
  it('should return success message when lambda invocation is successful', async () => {
    mockInvoke.mockResolvedValue('Lambda invocation result');

    const awsLambdaInvoker = new AwsLambdaInvoker();
    const requestRegisterByFilters = new RequestRegisterByFilters(awsLambdaInvoker);

    const filter = {
      userId: 1,
      month: 3,
      timezone: "America/Sao_Paulo"
    };
    const response = await requestRegisterByFilters.execute(filter);

    expect(response).toEqual('register points is requested with successfully');
  });

  it('should return an error when lambda invocation fails', async () => {
    const mockError = new Error('Lambda error');
    mockInvoke.mockResolvedValue(mockError);

    const awsLambdaInvoker = new AwsLambdaInvoker();
    const requestRegisterByFilters = new RequestRegisterByFilters(awsLambdaInvoker);

    const filter = {
      userId: 1,
      month: 3,
      timezone: "America/Sao_Paulo"
    };
    const response = await requestRegisterByFilters.execute(filter);

    expect(response).toBeInstanceOf(Error);
    expect(response).toEqual(mockError);
  });
});
