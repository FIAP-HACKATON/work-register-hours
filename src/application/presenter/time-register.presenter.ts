import { registerPoint } from './ports/presenter.ports';

export class PointRegisterPresenter {
  static register(registers: registerPoint[]): any {
    return registers.map((register) => ({
      date: register.date.toISOString().split('T')[0],
      entry: register.entry.toLocaleTimeString(),
      out: register.out.toLocaleTimeString(),
      intervals: register.intervals.map((inter) => ({
        start: inter.start.toLocaleTimeString(),
        close: inter.close.toLocaleTimeString(),
      })),
      totalHoursWorked: register.totalHoursWorked.toFixed(2) + ' horas',
    }));
  }
}
