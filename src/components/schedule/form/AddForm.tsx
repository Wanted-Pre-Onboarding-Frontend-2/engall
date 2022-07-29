import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { FormEvent, ChangeEvent, useCallback, useState } from 'react';
import { NewClass } from '../../../types/schedule';

const createSchedule = async (data: NewClass) => {
  const { data: response } = await axios.post(
    'http://localhost:8000/schedule',
    data
  );
  return response.data;
};

const AddForm = () => {
  const queryClient = useQueryClient();
  const [schedule, setSchedule] = useState('');
  /*
  const { mutate, isLoading } = useMutation(createSchedule, {
    onSucess: (data) => {
      console.log(data);
    },
    onError: () => {
      console.log('error');
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { // TODO: form onSubmit
    e.preventDefault();
    mutate();
    setSchedule('');
  };
  */

  return (
    <form name='' action='' method='post'>
      <div className='content-wrap'>
        <div className='form-list'>
          <h3>Start Time</h3>
          <div className='form-start'>
            <div className='form-select'>
              <select name='' id=''>
                <option value=''>00</option>
                <option value=''>01</option>
                <option value=''>02</option>
                <option value=''>03</option>
                <option value=''>04</option>
                <option value=''>05</option>
              </select>
              <span>:</span>
              <select name='' id=''>
                <option value=''>05</option>
                <option value=''>10</option>
                <option value=''>15</option>
                <option value=''>20</option>
              </select>
            </div>
            <div className='form-radio'>
              <input
                type='radio'
                name='time'
                id='am'
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSchedule(e.target.value)
                }
              />
              <label htmlFor='am'>AM</label>
            </div>
            <div className='form-radio'>
              <input type='radio' name='time' id='pm' />
              <label htmlFor='pm'>PM</label>
            </div>
          </div>
        </div>
        <div className='form-list'>
          <h3>Repeat on</h3>
          <div className='form-repeat'>
            <div className='form-check'>
              <input type='checkbox' name='days' id='monday' />
              <label htmlFor='monday'>Monday</label>
            </div>
            <div className='form-check'>
              <input type='checkbox' name='days' id='tuesday' />
              <label htmlFor='tuesday'>Tuesday</label>
            </div>
            <div className='form-check'>
              <input type='checkbox' name='days' id='wednesday' />
              <label htmlFor='wednesday'>Wednesday</label>
            </div>
            <div className='form-check'>
              <input type='checkbox' name='days' id='thursday' />
              <label htmlFor='thursday'>Thursday</label>
            </div>
            <div className='form-check'>
              <input type='checkbox' name='days' id='friday' />
              <label htmlFor='friday'>Friday</label>
            </div>
            <div className='form-check'>
              <input type='checkbox' name='days' id='saturday' />
              <label htmlFor='saturday'>Saturday</label>
            </div>
            <div className='form-check'>
              <input type='checkbox' name='days' id='sunday' />
              <label htmlFor='sunday'>Sunday</label>
            </div>
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
