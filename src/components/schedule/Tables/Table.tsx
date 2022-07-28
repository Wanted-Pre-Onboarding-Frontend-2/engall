import React from "react";
import Time from "../cards/Time";
import { ScheduleList, ScheduleProps } from "../../../types/schedule";

interface TableProps {
  weekday: string;
  data: ScheduleProps[];
}

const Table = (props: TableProps) => {
  const { weekday, data } = props;
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>{weekday}</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data) => (
                <tr key={data?.id}>
                  <Time time={data.time} />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

// const FlexBox = tw.div`
// flex justify-center pt-10 flex-col w-full md:w-[90%] mx-auto
// `;

// const InnerTable = tw.table`
// bg-white table-fixed border-separate border-spacing-x-12 border-spacing-y-6 shadow-md
// w-full
// `;
