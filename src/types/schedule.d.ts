type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

interface ScheduleTypes {
  id?: number;
  day: string[] | string;
  startTime: string; // 통일하려고 start -> startTime으로 바꿈
  endTime: string;
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

export { ScheduleProps, ScheduleList, Schedule, ScheduleTypes };
