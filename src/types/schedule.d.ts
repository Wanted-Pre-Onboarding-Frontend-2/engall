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

export { ScheduleProps, ScheduleList, Schedule };
