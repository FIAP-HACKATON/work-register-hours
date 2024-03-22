export class registerPoint {
  constructor(
    public date: Date,
    public totalHoursWorked: number,
  ) {}
}

export type Interval = {
  start: string;
  close: string;
};
