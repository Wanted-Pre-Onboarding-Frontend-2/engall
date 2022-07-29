import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { deleteSchedule } from '../../api/httpRequest';

interface PopupProps {
  data?: dataType;
  text: string;
  confirm: boolean;
  onCloseHandler: () => void;
  onClickHandler: () => void;
  open: boolean;
}

interface dataType {
  id?: number;
  day: string;
  start: string;
  end: string;
}

const Popup = ({
  data,
  text,
  confirm,
  open,
  onCloseHandler,
  onClickHandler,
}: PopupProps) => {
  // console.log(data.id);

  return (
    <div className={`popup ${open && 'open'}`}>
      <div className='popup-content'>
        {data && (
          <div className='popup-time'>
            <strong>{data.day}</strong>
            <p>
              {data.start} - {data.end}
            </p>
          </div>
        )}
        <div className='popup-text'>{text}</div>
        <div className='popup-btn'>
          {confirm ? (
            <div className='btns'>
              <button
                type='button'
                className='btn btn-type1 medium'
                onClick={onClickHandler}
              >
                YES
              </button>
              <button
                type='button'
                className='btn btn-type2 medium'
                onClick={onCloseHandler}
              >
                NO
              </button>
            </div>
          ) : (
            <button
              type='button'
              className='btn btn-type1 medium'
              onClick={onCloseHandler}
            >
              close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
