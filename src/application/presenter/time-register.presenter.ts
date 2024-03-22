import { registerPoint } from './ports/presenter.ports';

export class PointRegisterPresenter {
  static register(registers: registerPoint[]): any {
    if (registers.length === 0) {
      return {};
    }

    const sortedRegisters = registers.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    const entry = sortedRegisters[0].date;
    const out = sortedRegisters[sortedRegisters.length - 1].date;

    const interval = {
      start: '',
      end: '',
    };

    if (sortedRegisters.length > 2) {
      interval.start = sortedRegisters[1].date.toISOString();
      interval.end = sortedRegisters[2].date.toISOString();
    }

    const entryDate = new Date(entry);
    const outDate = new Date(out);
    let totalMillis = outDate.getTime() - entryDate.getTime();

    if (interval.start && interval.end) {
      const intervalStart = new Date(interval.start).getTime();
      const intervalEnd = new Date(interval.end).getTime();
      totalMillis -= intervalEnd - intervalStart;
    }

    const totalHoursWorked = (totalMillis / (1000 * 60 * 60)).toFixed(2);
    if (+totalHoursWorked < 0) +totalHoursWorked * 60;
    return {
      entry,
      out,
      interval,
      totalHoursWorked:
        this.convertDecimalHoursToHoursAndMinutes(totalHoursWorked),
    };
  }
  static convertDecimalHoursToHoursAndMinutes(decimalHours) {
    const hours = Math.floor(decimalHours);
    const decimalPart = decimalHours - hours;
    const minutes = Math.round(decimalPart * 60);

    return `${hours} horas e ${minutes} minutos`;
  }
}
