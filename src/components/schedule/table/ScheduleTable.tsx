import React from 'react';
import Time from '../cards/Time';
import { ScheduleList, ScheduleProps } from '../../../types/schedule';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useQuery } from '@tanstack/react-query';
import { getSchedule } from '../../../api/httpRequest';

const Table = () => {
  const { data } = useQuery(['schedule'], () => getSchedule());
  console.log(data);

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
      ].map((yoil, index) => (
        <div key={yoil + index} className='table-content'>
          <h3>{yoil}</h3>
          <ul className='table-lists'>
            <li>
              <p>
                <span>10:00 AM -</span>
                <span>10:40 AM</span>
              </p>
              <button type='button'>
                <AiFillCloseCircle />
              </button>
            </li>
            <li>
              <p>
                <span>10:00 AM -</span>
                <span>10:40 AM</span>
              </p>
              <button type='button'>
                <AiFillCloseCircle />
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Table;
