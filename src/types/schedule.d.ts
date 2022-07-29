type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface NewClass {
  DayOfWeek: [id: string, time: stringp[]];
}

interface Schedule {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
  sunday: string[];
}

interface ScheduleProps {
  id: string;
  tutor: string;
  time: string[];
}

type ScheduleList = ScheduleProps[];

export { ScheduleProps, ScheduleList, Schedule, NewClass };
