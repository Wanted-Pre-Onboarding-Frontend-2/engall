import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { FormEvent, ChangeEvent, useState } from "react";
import { Schedule, NewSchedule } from "../../../types/schedule";
import { createSchedule, getSchedule } from "../../../api/httpRequest";
import { add, format } from "date-fns";
import { HOURS, MINUTES, MERIDIEMS, daysOfWeek } from "../../../utils/getDate";
import { useNavigate } from "react-router-dom";
import Popup from "../../layout/Popup";
import { submitTime } from "../../../hooks/useDate";

const date = new Date();
const today = format(date, "yyyy-MM-dd");

interface TimeTypes {
  hour: string;
  minute: string;
  meridiem: string;
}

const AddForm = () => {
  const { data } = useQuery<Schedule[]>(["schedule"], () => getSchedule());

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [popupOpen, setPopupOpen] = useState(false);
  const popupHandler = (status: boolean) => {
    setPopupOpen(status);
  };

  const [days, setDays] = useState<string[]>([]);
  const [times, setTimes] = useState<TimeTypes>({
    hour: "00",
    minute: "00",
    meridiem: "am",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setTimes({ ...times, [name]: value });
  };

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked) {
      setDays([...days, event.target.value]);
    }
  };

  const { mutate } = useMutation(createSchedule, {
    onMutate: (variables) => {
      if (JSON.stringify(data) === JSON.stringify(variables)) {
        setPopupOpen(true);
      } else {
        alert("추가되었습니다.");
        navigate("/view");
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["schedule"]);
    },
    onSettled: () => {},
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const startTimeStr = `${times.hour}:${times.minute}`;
    const submitDate = new Date(`${today} ${startTimeStr}`);
    const { startTime, endTime } = submitTime(submitDate, times.meridiem);

    const newSchedule: NewSchedule = {
      days: days,
      start: `${startTime} ${times.meridiem}`,
      end: `${endTime} ${times.meridiem}`,
    };

    mutate(newSchedule);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="content-wrap">
        <div className="form-list">
          <h3>Start Time</h3>
          <div className="form-start">
            <div className="form-select">
              <select
                name="hour"
                id="hour"
                onChange={handleChange}
                value={times.hour}
              >
                {HOURS.map((hour: string, index: number) => (
                  <option value={hour} key={hour + "-" + index}>
                    {hour}
                  </option>
                ))}
              </select>
              <span>:</span>
              <select
                name="minute"
                id="minute"
                onChange={handleChange}
                value={times.minute}
              >
                {MINUTES.map((minute: string, index) => (
                  <option value={minute} key={minute + "-" + index}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>
            {MERIDIEMS.map((meridiem) => (
              <div className="form-radio" key={meridiem}>
                <input
                  type="radio"
                  name="meridiem"
                  id={meridiem}
                  onChange={handleChange}
                  value={meridiem}
                />
                <label htmlFor={meridiem}>{meridiem.toUpperCase()}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-list">
          <h3>Repeat on</h3>
          <div className="form-repeat">
            {daysOfWeek.map((day) => (
              <div className="form-check" key={day}>
                <input
                  type="checkbox"
                  name="days"
                  id={day}
                  value={day}
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor={day}>{day}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-type1 large form-btn">
        Save
      </button>
      <Popup
        text="중복된 시간입니다."
        open={popupOpen}
        onCloseHandler={() => popupHandler(false)}
      />
    </form>
  );
};

export default AddForm;
