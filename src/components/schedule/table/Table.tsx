import React from "react";
import Time from "../cards/Time";
import { ScheduleList, ScheduleProps } from "../../../types/schedule";

// interface TableProps {
//   weekday: string;
//   data: ScheduleProps[];
// }

const Table = () => {
  return (
    <div className="table-wrap">
      {["Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"].map(
        (yoil, index) => (
          <div key={yoil + index} className="table-content">
            <h3>{yoil}</h3>
            <ul className="table-lists">
              <li>
                <p>
                  <span>10:00 AM -</span>
                  <span>10:40 AM</span>
                </p>
                <button type="button">삭제</button>
              </li>
              <li>
                <p>
                  <span>10:00 AM -</span>
                  <span>10:40 AM</span>
                </p>
                <button type="button">삭제</button>
              </li>
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default Table;
