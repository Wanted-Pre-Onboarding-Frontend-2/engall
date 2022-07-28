interface Schedule {
  monday: object[];
  tuesday: object[];
  wednesday: object[];
  thursday: object[];
  friday: object[];
  saturday: object[];
  sunday: object[];
}

interface ScheduleProps {
  id: string;
  tutor: string;
  time: string[];
}

type ScheduleList = ScheduleProps[];

export { ScheduleProps, ScheduleList, Schedule };
