
import { GetRegisterRepository } from '@application/interfaces/repositories/time-register/GetRegisterRepository';
import { GetRegisterByFilters } from './GetRegister';

// Mocks
const getRegistrationMock = jest.fn();

const getRegisterRepositoryMock: GetRegisterRepository = {
  getRegistration: getRegistrationMock,
};

const makeSut = () => {
  const sut = new GetRegisterByFilters(getRegisterRepositoryMock);
  return { sut };
};

describe('GetRegisterByFilters', () => {
  beforeEach(() => {
    getRegistrationMock.mockReset();
  });

  it('should return an empty array when no registration is found', async () => {
    getRegistrationMock.mockResolvedValueOnce(null);
    const { sut } = makeSut();
    const response = await sut.execute({ filter_date: '2024-03-22' });
    expect(response).toEqual([]);
    expect(getRegistrationMock).toHaveBeenCalledWith({ filter_date: '2024-03-22' });
  });

  it('should return a transformed registration list when registrations are found', async () => {
    const mockRegistration = [
      { id: '1', date: new Date('2024-03-22T08:00:00Z'), type: 'entry' },
    ];
    getRegistrationMock.mockResolvedValueOnce(mockRegistration);
    const { sut } = makeSut();
    const response = await sut.execute({ filter_date: '2024-03-22' });

    expect(response).not.toEqual([]);
    expect(response).toEqual(expect.any(Object));
    expect(getRegistrationMock).toHaveBeenCalledWith({ filter_date: '2024-03-22' });
  });

});
