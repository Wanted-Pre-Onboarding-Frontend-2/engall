import React from "react";
import { ScheduleList, ScheduleProps } from "../../../types/schedule";

interface TableProps {
  time: string[];
}

const TimeCard = (time: TableProps) => {
  console.log(time);
  return (
   <></>
  );
};

export default TimeCard;

{/* <Box>
<Card>
  <StartTime>
    {time.time[0]} {time.time[2]} -
  </StartTime>
  <EndTime>
    {time.time[1]} {time.time[2]}
  </EndTime>
  <Cancel />
</Card>
</Box> */}