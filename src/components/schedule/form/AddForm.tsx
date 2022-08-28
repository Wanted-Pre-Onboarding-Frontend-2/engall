import { FormEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScheduleTypes } from '../../../types/schedule';
import { format } from 'date-fns';

import Popup from '../../layout/Popup';
import { HOURS, MINUTES, MERIDIEMS, daysOfWeek } from '../../../utils/getDate';

import { submitTime } from '../../../hooks/useDate';
import { duplicateTime } from '../../../hooks/useDuplicateTime';
import { useAddSchedule } from '../../../hooks/queries/useAddSchedule';
import { useGetSchedule } from '../../../hooks/queries/useGetSchedule';

const date = new Date();
const today = format(date, 'yyyy-MM-dd');

interface TimeTypes {
  hour: string;
  minute: string;
  meridiem: string;
}

const AddForm = () => {
  const navigate = useNavigate();

  // const { data } = useQuery('schedule', () => getSchedule());
  const addSchedule = useAddSchedule();
  const schedules = useGetSchedule();

  const [popupOpen, setPopupOpen] = useState(false);
  const [days, setDays] = useState<string[]>([]);
  const [times, setTimes] = useState<TimeTypes>({
    hour: '00',
    minute: '00',
    meridiem: 'am',
  });

  const popupHandler = (status: boolean) => {
    setPopupOpen(status);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setTimes({ ...times, [name]: value });
  };

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const value = event.target.value;

    if (checked) {
      setDays([...days, value]);
    } else {
      setDays(days.filter((el) => el !== value));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const startTimeStr = `${times.hour}:${times.minute}`;
    const submitDate = new Date(`${today} ${startTimeStr}`);
    const { startTime, endTime } = submitTime(submitDate, times.meridiem);

    days.map((day: string) => {
      const newSchedule: ScheduleTypes = {
        day: day,
        start: `${startTime} ${times.meridiem}`,
        end: `${endTime} ${times.meridiem}`,
      };

      const yoilData: any = schedules?.filter(
        (day: any) => day.day === newSchedule.day
      );

      const isDuplicate: boolean = duplicateTime(newSchedule, yoilData);

      if (isDuplicate) {
        addSchedule(newSchedule);
        alert('일정이 추가되었습니다.');
        navigate('/view');
      } else {
        setPopupOpen(true);
      }
    });
  };

  return (
    <form method='post' onSubmit={handleSubmit}>
      <div className='content-wrap'>
        <div className='form-list'>
          <h3>Start Time</h3>
          <div className='form-start'>
            <div className='form-select'>
              <select
                name='hour'
                id='hour'
                onChange={handleChange}
                value={times.hour}
              >
                {HOURS.map((hour: string, index: number) => (
                  <option value={hour} key={hour + '-' + index}>
                    {hour}
                  </option>
                ))}
              </select>
              <span>:</span>
              <select
                name='minute'
                id='minute'
                onChange={handleChange}
                value={times.minute}
              >
                {MINUTES.map((minute: string, index) => (
                  <option value={minute} key={minute + '-' + index}>
                    {minute}
                  </option>
                ))}
              </select>
            </div>
            {MERIDIEMS.map((meridiem) => (
              <div className='form-radio' key={meridiem}>
                <input
                  type='radio'
                  name='meridiem'
                  id={meridiem}
                  onChange={handleChange}
                  value={meridiem}
                />
                <label htmlFor={meridiem}>{meridiem.toUpperCase()}</label>
              </div>
            ))}
          </div>
        </div>
        <div className='form-list'>
          <h3>Repeat on</h3>
          <div className='form-repeat'>
            {daysOfWeek.map((day) => (
              <div className='form-check' key={day}>
                <input
                  type='checkbox'
                  name='days'
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
      <button type='submit' className='btn btn-type1 large form-btn'>
        Save
      </button>
      <Popup
        text='중복된 시간입니다.'
        open={popupOpen}
        onCloseHandler={() => popupHandler(false)}
      />
    </form>
  );
};

export default AddForm;
