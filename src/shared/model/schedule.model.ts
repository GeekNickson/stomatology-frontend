export enum Weekday {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export interface Schedule {
  id: number;
  weekday: Weekday;
  start: string;
  end: string;
}
