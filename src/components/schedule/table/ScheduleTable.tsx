import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Popup from '../../layout/Popup';
import { daysOfWeek } from '../../../utils/getDate';
import { useGetSchedule } from '../../../hooks/query/useGetSchedule';
import { useDeleteSchedule } from '../../../hooks/query/useDeleteSchedule';

const ScheduleTable = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [timeData, setTimeData] = useState<any>();

  const schedules = useGetSchedule();
  const deleteSchedule = useDeleteSchedule();

  const popupHandler = (status: boolean, time?: object | any) => {
    setPopupOpen(status);
    if (time) setTimeData(time);
  };

  const deleteHandler = (id: number) => {
    alert('삭제완료');
    setPopupOpen(false);
    deleteSchedule(id);
  };

  return (
    <div className='content-wrap table-wrap'>
      {daysOfWeek.map((yoil: string, index: number) => (
        <div key={yoil + index} className='table-content'>
          <h3>{yoil.charAt(0).toUpperCase() + yoil.slice(1)}</h3>
          <ul className='table-lists'>
            {schedules &&
              Object.values(schedules).map(
                (value: any) =>
                  value.day === yoil.toLowerCase() && (
                    <li key={value.id}>
                      <p>
                        <span>{value.start} - </span>
                        <span>{value.end}</span>
                      </p>
                      <button
                        type='button'
                        onClick={() =>
                          popupHandler(true, {
                            id: value.id,
                            day: value.day,
                            start: value.start,
                            end: value.end,
                          })
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
        text='수업을 삭제하시겠습니까?'
        confirm={true}
        open={popupOpen}
        onCloseHandler={() => popupHandler(false)}
        onClickHandler={() => deleteHandler(timeData.id)}
      />
    </div>
  );
};

export default ScheduleTable;
