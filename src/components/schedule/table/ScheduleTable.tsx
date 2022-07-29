import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Popup from '../../layout/Popup';

import { daysOfWeek } from '../../../utils/getDate';

import { Schedule } from '../../../types/schedule';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteSchedule, getSchedule } from '../../../api/httpRequest';

const ScheduleTable = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [timeData, setTimeData] = useState<any>();
  // console.log(timeData.id);
  const { data } = useQuery<Schedule[] | any>(['schedule'], () =>
    getSchedule()
  );

  const deleteMutation = useMutation((id: number) => deleteSchedule(id));
  // deleteMutaion.mutate(data.id)

  const popupHandler = (status: boolean, time?: object | any) => {
    setPopupOpen(status);
    if (time) setTimeData(time);
  };
  const deleteHandler = (id: number) => {
    alert('삭제완료');
    setPopupOpen(false);
    deleteMutation.mutate(data.id);
  };

  return (
    <div className='content-wrap table-wrap'>
      {daysOfWeek.map((yoil: string, index: number) => (
        <div key={yoil + index} className='table-content'>
          <h3>{yoil.charAt(0).toUpperCase() + yoil.slice(1)}</h3>
          <ul className='table-lists'>
            {data &&
              Object.values(data).map(
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
