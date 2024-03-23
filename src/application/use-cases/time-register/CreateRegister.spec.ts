import { CreateRegister } from './CreateRegister'; // Ajuste o caminho de importação conforme necessário
import { mockDeep } from 'jest-mock-extended';
import { CreateRegisterRepository } from '@application/interfaces/repositories/time-register/CreateRegisterRepostirory';
import { GetUserByIdRepository } from '@application/interfaces/repositories/user/GetUserByIdRepository';
import { userMocked } from '../../../tests/mock/user';

describe('CreateRegister', () => {
  const mockCreateRegisterRepository = mockDeep<CreateRegisterRepository>();
  const mockGetUserByIdRepository = mockDeep<GetUserByIdRepository>();
  const user_mock = userMocked;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return "User not found" if user does not exist', async () => {
    mockGetUserByIdRepository.getUserById.mockResolvedValue(null);
    const createRegister = new CreateRegister(mockCreateRegisterRepository, mockGetUserByIdRepository);

    const response = await createRegister.execute({ user_id: 52, date: new Date() });

    expect(response).toBe('User not found');
  });

  it('should return "Error creating register" if registration fails', async () => {
    mockGetUserByIdRepository.getUserById.mockResolvedValue(user_mock);
    mockCreateRegisterRepository.execute.mockResolvedValue(null);

    const createRegister = new CreateRegister(mockCreateRegisterRepository, mockGetUserByIdRepository);

    const response = await createRegister.execute({ user_id: 1, date: new Date() });

    expect(response).toEqual(Error('Error creating register'));
  });

  it('should return "register created successfully" if registration succeeds', async () => {
    mockGetUserByIdRepository.getUserById.mockResolvedValue(user_mock);
    mockCreateRegisterRepository.execute.mockResolvedValue({ user_id: 1 });

    const createRegister = new CreateRegister(mockCreateRegisterRepository, mockGetUserByIdRepository);

    const response = await createRegister.execute({ user_id: 1, date: new Date() });

    expect(response).toBe('register created successfully');
  });

});
