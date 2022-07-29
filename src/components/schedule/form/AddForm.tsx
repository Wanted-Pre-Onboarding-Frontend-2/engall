import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { FormEvent, ChangeEvent, useState } from 'react';
import { NewSchedule } from '../../../types/schedule';
import { createSchedule } from '../../../api/httpRequest';
import { add, format } from 'date-fns';

const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const date = new Date();
const today = format(date, 'yyyy-MM-dd');

const AddForm = () => {
  const queryClient = useQueryClient();

  const [day, setDay] = useState<string[]>([]);
  const [times, setTimes] = useState<any>({
    hour: '00',
    minute: '00',
    time: 'am',
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setTimes({ ...times, [name]: value });
  };

  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked) {
      setDay([...day, event.target.value]);
    }
  };

  const { mutate } = useMutation(createSchedule, {
    onMutate: (variables) => {
      console.log(variables);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(['schedule']);
    },
    onSettled: () => {},
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const startTimeStr = `${times.hour}:${times.minute}`;
    const submitDate = new Date(`${today} ${startTimeStr}`);

    const startAddTime = add(submitDate, {
      hours: times.time === 'pm' ? 12 : 0,
    });
    const endAddTime = add(submitDate, {
      hours: times.time === 'pm' ? 12 : 0,
      minutes: 40,
    });

    const startTime = format(startAddTime, 'HH:mm');
    const endTime = format(endAddTime, 'HH:mm');

    const newSchedule: NewSchedule = {
      days: day,
      start: startTime + ' ' + times.time,
      end: endTime + ' ' + times.time,
    };

    mutate(newSchedule);
  };

  return (
    <form method='post' onSubmit={handleSubmit}>
      <div className='content-wrap'>
        <div className='form-list'>
          <h3>Start Time</h3>
          <div className='form-start'>
            <div className='form-select'>
              <select name='hour' id='hour' onChange={handleChange}>
                <option value='00'>00</option>
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='03'>03</option>
                <option value='04'>04</option>
                <option value='05'>05</option>
              </select>
              <span>:</span>
              <select name='minute' id='minute' onChange={handleChange}>
                <option value='00'>00</option>
                <option value='05'>05</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
              </select>
            </div>
            <div className='form-radio'>
              <input
                type='radio'
                name='time'
                id='am'
                // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //   setSchedule(e.target.value)
                // }
                onChange={handleChange}
                value='am'
              />
              <label htmlFor='am'>AM</label>
            </div>
            <div className='form-radio' onChange={handleChange}>
              <input type='radio' name='time' id='pm' value='pm' />
              <label htmlFor='pm'>PM</label>
            </div>
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
    </form>
  );
};

export default AddForm;
