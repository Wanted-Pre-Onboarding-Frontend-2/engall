import React, { useState } from "react";
import { ScheduleList, ScheduleProps, Schedule } from "../../../types/schedule";
import { AiFillCloseCircle } from "react-icons/ai";
import Popup from "../../layout/Popup";
import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "../../../api/httpRequest";

interface timeTypes {
  id: string;
  time: string[];
}

interface timeDataTypes {}

const ScheduleTable = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [timeData, setTimeData] = useState();
  const { data } = useQuery<Schedule[] | any>(["schedule"], () =>
    getSchedule()
  );

  const popupHandler = (status: boolean, time?: object | any) => {
    setPopupOpen(status);
    if (time) setTimeData(time);
  };
  const deleteHandler = () => {
    alert("삭제완료");
    setPopupOpen(false);
  };

  return (
    <div className="content-wrap table-wrap">
      {[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ].map((yoil: string, index: number) => (
        <div key={yoil + index} className="table-content">
          <h3>{yoil}</h3>
          <ul className="table-lists">
            {data &&
              data[yoil.toLowerCase()].map(
                (times: timeTypes, index: number) => (
                  <li key={index}>
                    <p>
                      <span>
                        {times.time[0]} {times.time[2]} -
                      </span>
                      <span>
                        {times.time[1]} {times.time[2]}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        popupHandler(true, { yoil: yoil, time: times.time })
                      }
                    >
                      <AiFillCloseCircle />
                    </button>
                  </li>
                )
              )}
          </ul>
        </div>
      ))}
      <Popup
        data={timeData}
        text="수업을 삭제하시겠습니까?"
        confirm={true}
        open={popupOpen}
        onCloseHandler={() => popupHandler(false)}
        onClickHandler={deleteHandler}
      />
    </div>
  );
};

export default ScheduleTable;
