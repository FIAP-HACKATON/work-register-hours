import { PointRegisterPresenter } from "./time-register.presenter";

describe('PointRegisterPresenter', () => {
  it('should return an empty object if no registers are provided', () => {
    const result = PointRegisterPresenter.register([]);
    expect(result).toEqual({});
  });

  it('should correctly calculate the total hours worked without intervals', () => {
    const registers = [
      { date: new Date('2024-03-22T08:00:00Z') },
      { date: new Date('2024-03-22T17:00:00Z') },
    ];
    const result = PointRegisterPresenter.register(registers);
    expect(result.totalHoursWorked).toEqual('9 horas e 0 minutos');
  });

  it('should correctly calculate the total hours worked with intervals', () => {
    const registers = [
      { date: new Date('2024-03-22T08:00:00Z') },
      { date: new Date('2024-03-22T12:00:00Z') },
      { date: new Date('2024-03-22T13:00:00Z') },
      { date: new Date('2024-03-22T17:00:00Z') },
    ];
    const result = PointRegisterPresenter.register(registers);
    expect(result.totalHoursWorked).toEqual('8 horas e 0 minutos');
  });
});
