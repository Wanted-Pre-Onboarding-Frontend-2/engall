import React, { useState } from "react";
import Time from "../cards/Time";
import { ScheduleList, ScheduleProps } from "../../../types/schedule";
import { AiFillCloseCircle } from "react-icons/ai";
import Popup from "../../layout/Popup";
import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "../../../api/httpRequest";

interface dataProps {
  data?: any;
}

interface timeTypes {
  id: string;
  time: string[];
}

const ScheduleTable = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const { data } = useQuery(["schedule"], () => getSchedule());
  console.log(data);

  const popupHandler = (status: boolean) => {
    setPopupOpen(status);
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
          <ul className="table-lists">{data && <></>}</ul>
        </div>
      ))}
      <Popup
        data={{ yoil: "Monday", time: ["09:00", "9:40", "am"] }}
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
{
  /* <li key={index}>
                    <p>
                      <span>
                        {times.time[0]} {times.time[2]} -
                      </span>
                      <span>
                        {times.time[1]} {times.time[2]}
                      </span>
                    </p>
                    <button type="button" onClick={() => popupHandler(true)}>
                      <AiFillCloseCircle />
                    </button>
                  </li> */
}
