import React from "react";

interface PopupProps {
  data?: dataType;
  text: string;
  confirm?: boolean;
  onCloseHandler: () => void;
  onClickHandler?: () => void;
  open: boolean;
}

interface dataType {
  yoil: string;
  time: string[];
}

const Popup = ({
  data,
  text,
  confirm,
  open,
  onCloseHandler,
  onClickHandler,
}: PopupProps) => {
  return (
    <div className={`popup ${open && "open"} `}>
      <div className="popup-content">
        {data && (
          <div className="popup-time">
            <strong>{data.yoil}</strong>
            <p>
              {data.time[0]} - {data.time[1]} {data.time[2]}
            </p>
          </div>
        )}
        <div className="popup-text">{text}</div>
        <div className="popup-btn">
          {confirm ? (
            <div className="btns">
              <button
                type="button"
                className="btn btn-type1 medium"
                onClick={onClickHandler}
              >
                YES
              </button>
              <button
                type="button"
                className="btn btn-type2 medium"
                onClick={onCloseHandler}
              >
                NO
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-type1 medium"
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
