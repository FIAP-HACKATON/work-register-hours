export class registerPoint {
  constructor(
    public date: Date,
    public entry: Date,
    public out: Date,
    public intervals: Interval[],
    public totalHoursWorked: number,
  ) {}
}

export type Interval = {
  start: Date;
  close: Date;
};
