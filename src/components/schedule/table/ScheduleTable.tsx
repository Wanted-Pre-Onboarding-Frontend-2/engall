import React, { useState } from 'react';
import { ScheduleList, ScheduleProps, Schedule } from '../../../types/schedule';
import { AiFillCloseCircle } from 'react-icons/ai';
import Popup from '../../layout/Popup';
import { useQuery } from '@tanstack/react-query';
import { getSchedule } from '../../../api/httpRequest';

interface timeTypes {
  id: string;
  time: string[];
}

const ScheduleTable = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [timeData, setTimeData] = useState();
  const { data } = useQuery<Schedule[] | any>(['schedule'], () =>
    getSchedule()
  );

  const popupHandler = (status: boolean, time?: object | any) => {
    setPopupOpen(status);
    if (time) setTimeData(time);
  };
  const deleteHandler = () => {
    alert('삭제완료');
    setPopupOpen(false);
  };

  Object.values(data).map((v, index) => console.log(v, index));

  return (
    <div className='content-wrap table-wrap'>
      {[
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ].map((yoil: string, index: number) => (
        <div key={yoil + index} className='table-content'>
          <h3>{yoil}</h3>
          <ul className='table-lists'>
            {data &&
              Object.values(data).map((values: any) =>
                values.days.map(
                  (day: string, index: number) =>
                    day === yoil.toLowerCase() && (
                      <li key={index}>
                        <p>
                          <span>{values.start} - </span>
                          <span>{values.end}</span>
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            popupHandler(true, {
                              day: day,
                              start: values.start,
                              end: values.end,
                            })
                          }
                        >
                          <AiFillCloseCircle />
                        </button>
                      </li>
                    )
                )
              )}
          </ul>
        </div>
      ))}
      <Popup
        data={timeData}
        text='수업을 삭제하시겠습니까?'
        confirm={true}
        open={popupOpen}
        onCloseHandler={() => popupHandler(false)}
        onClickHandler={deleteHandler}
      />
    </div>
  );
};

export default ScheduleTable;

