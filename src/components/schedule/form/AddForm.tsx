import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FormEvent, ChangeEvent, useCallback, useState } from "react";
import { NewClass } from "../../../types/schedule";
import { getSchedule } from "../../../api/httpRequest";

const yoils = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const createSchedule = async (data: NewClass) => {
  const { data: response } = await axios.post(
    "http://localhost:8000/schedule",
    data
  );
  return response.data;
};

const AddForm = () => {
  const queryClient = useQueryClient();

  const [schedule, setSchedule] = useState([]);

  const [day, setDay] = useState<any>([]);
  const [times, setTimes] = useState({
    hour: "00",
    minute: "00",
    time: "am",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setTimes({ ...times, [name]: value });
  };

  const handleChangeCheckbox = (event: any) => {
    const checked = event.target.checked;

    if (checked) {
      setDay([...day, event.target.value]);
    }
  };

  const { data } = useQuery(["schedule"], () => getSchedule());

  const { mutate, isLoading } = useMutation(createSchedule, {
    onMutate: (variables) => {
      console.log(variables);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["schedule"]);
      // queryClient.setQueryData(["schedule", data], (oldData: any) => {
      //   return { ...oldData, newData };
      // });
    },
    onSettled: () => {},
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // TODO: form onSubmit
    e.preventDefault();
    mutate(day);
  };

  return (
    <form name="" action="" method="post" onSubmit={handleSubmit}>
      <div className="content-wrap">
        <div className="form-list">
          <h3>Start Time</h3>
          <div className="form-start">
            <div className="form-select">
              <select name="hour" id="hour" onChange={handleChange}>
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
              </select>
              <span>:</span>
              <select name="minute" id="minute" onChange={handleChange}>
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="form-radio">
              <input
                type="radio"
                name="time"
                id="am"
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //   setSchedule(e.target.value)
                // }
                onChange={handleChange}
                value="am"
              />
              <label htmlFor="am">AM</label>
            </div>
            <div className="form-radio" onChange={handleChange}>
              <input type="radio" name="time" id="pm" value="pm" />
              <label htmlFor="pm">PM</label>
            </div>
          </div>
        </div>
        <div className="form-list">
          <h3>Repeat on</h3>
          <div className="form-repeat">
            {yoils.map((yoil) => (
              <div className="form-check" key={yoil}>
                <input
                  type="checkbox"
                  name="days"
                  id={yoil}
                  value={yoil}
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor={yoil}>{yoil}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-type1 large form-btn">
        Save
      </button>
    </form>
  );
};

export default AddForm;
